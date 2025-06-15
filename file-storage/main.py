import os
import aiofiles
from fastapi import FastAPI, UploadFile, File, HTTPException, Path
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import shutil
from datetime import datetime
import filetype
import uuid
import time

app = FastAPI(
    title="File Storage API",
    description="Simple file storage system with folder management",
    version="1.0.0"
)

# เพิ่ม CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# สร้างโฟลเดอร์ uploads หากยังไม่มี
UPLOADS_DIR = "uploads"
os.makedirs(UPLOADS_DIR, exist_ok=True)

def generate_unique_filename(folder_name: str, file_extension: str) -> str:
    """สร้างชื่อไฟล์ที่ไม่ซ้ำกัน"""
    max_attempts = 100
    
    for _ in range(max_attempts):
        # สร้าง timestamp ที่มีความละเอียดสูง
        now = datetime.now()
        timestamp = now.strftime("%Y%m%d%H%M%S")
        microsecond = now.microsecond
        
        # สร้างชื่อไฟล์
        filename = f"{timestamp}_{microsecond:06d}.{file_extension}"
        
        # ตรวจสอบว่าไฟล์มีอยู่แล้วหรือไม่
        file_path = get_file_path(folder_name, filename)
        if not os.path.exists(file_path):
            return filename
        
        # หากไฟล์มีอยู่แล้ว รอเล็กน้อยแล้วลองใหม่
        time.sleep(0.001)  # รอ 1 millisecond
    
    # หากไม่สามารถสร้างชื่อไฟล์ที่ไม่ซ้ำได้ ใช้ timestamp + UUID แบบยาว
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    full_uuid = str(uuid.uuid4())
    return f"{timestamp}_{full_uuid}.{file_extension}"

def create_folder_if_not_exists(folder_name: str):
    """สร้างโฟลเดอร์หากยังไม่มี"""
    folder_path = os.path.join(UPLOADS_DIR, folder_name)
    os.makedirs(folder_path, exist_ok=True)
    return folder_path

def get_file_path(folder_name: str, filename: str):
    """สร้าง path ของไฟล์"""
    return os.path.join(UPLOADS_DIR, folder_name, filename)

def checkFileType(file: bytes) :
    """ตรวจสอบประเภทของไฟล์จาก bytes"""
    file_bytes = None
    if isinstance(file, bytes) :
        file_bytes = file

    # ตรวจสอบประเภทของไฟล์จาก bytes
    try :
        type = filetype.guess(file_bytes)
        if type is None:
            return None
        else:
            return type.extension
    except :
        return None


@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "File Storage API", "version": "1.0.0"}

# สำหรับการอัปโหลดไฟล์ไปยังโฟลเดอร์ที่กำหนด
@app.post("/api/v1/{folder_name}")
async def upload_file(
    folder_name: str = Path(..., description="ชื่อโฟลเดอร์"),
    file: UploadFile = File(..., description="ไฟล์ที่ต้องการอัปโหลด")
):
    """
    อัปโหลดไฟล์ไปยังโฟลเดอร์ที่กำหนด
    - folder_name: ชื่อโฟลเดอร์ที่ต้องการเก็บไฟล์
    - file: ไฟล์ที่ต้องการอัปโหลด
    """
    try:
        # สร้างโฟลเดอร์หากยังไม่มี
        folder_path = create_folder_if_not_exists(folder_name)
        
        # ตรวจสอบนามสกุลของไฟล์
        content = await file.read()
        file_extension = checkFileType(content)

        # สร้างชื่อไฟล์ที่ไม่ซ้ำกัน
        filename = generate_unique_filename(folder_name, file_extension)

        # สร้าง path ของไฟล์
        file_path = get_file_path(folder_name, filename)

        # บันทึกไฟล์
        async with aiofiles.open(file_path, 'wb') as f:
            await f.write(content)
        
        return {
            "success": True,
            "message": "ไฟล์อัปโหลดสำเร็จ",
            "folder": folder_name,
            "filename": filename,
            "original_filename": file.filename,
            "content_type": file.content_type,
            "path": f"uploads/{folder_name}/{filename}"
        }
    
    except Exception as e:
        return {
            "success": False,
            "message": f"{str(e)}"
        }

# สำหรับการดาวน์โหลดไฟล์จากโฟลเดอร์และชื่อไฟล์ที่กำหนด
@app.get("/api/v1/{folder_name}/{filename}")
async def get_file(
    folder_name: str = Path(..., description="ชื่อโฟลเดอร์"),
    filename: str = Path(..., description="ชื่อไฟล์")
):
    """
    ดาวน์โหลดไฟล์จากโฟลเดอร์ที่กำหนด
    - folder_name: ชื่อโฟลเดอร์
    - filename: ชื่อไฟล์
    """
    try:
        file_path = get_file_path(folder_name, filename)
        
        # ตรวจสอบว่าไฟล์มีอยู่หรือไม่
        if not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail="ไม่พบไฟล์ที่ต้องการ")
        
        # ส่งไฟล์กลับ
        return FileResponse(
            path=file_path,
            filename=filename,
            media_type='application/octet-stream'
        )
    
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="ไม่พบไฟล์ที่ต้องการ")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์: {str(e)}")

# สำหรับลบโฟลเดอร์ที่กำหนด
@app.delete("/api/v1/folder/{folder_name}")
async def delete_folder(
    folder_name: str = Path(..., description="ชื่อโฟลเดอร์")
):
    """
    ลบโฟลเดอร์ที่กำหนด
    - folder_name: ชื่อโฟลเดอร์
    """
    try:
        folder_path = os.path.join(UPLOADS_DIR, folder_name)
        
        # ตรวจสอบว่าโฟลเดอร์มีอยู่หรือไม่
        if not os.path.exists(folder_path):
            raise HTTPException(status_code=404, detail="ไม่พบโฟลเดอร์ที่ต้องการลบ")
        
        # ลบโฟลเดอร์และไฟล์ทั้งหมดภายใน
        shutil.rmtree(folder_path)
        
        return {
            "success": True,
            "message": "ลบโฟลเดอร์สำเร็จ",
            "folder": folder_name,
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการลบโฟลเดอร์: {str(e)}")

# สำหรับการลบไฟล์จากโฟลเดอร์และชื่อไฟล์ที่กำหนด
@app.delete("/api/v1/{folder_name}/{filename}")
async def delete_file(
    folder_name: str = Path(..., description="ชื่อโฟลเดอร์"),
    filename: str = Path(..., description="ชื่อไฟล์")
):
    """
    ลบไฟล์จากโฟลเดอร์ที่กำหนด
    - folder_name: ชื่อโฟลเดอร์
    - filename: ชื่อไฟล์
    """
    try:
        file_path = get_file_path(folder_name, filename)
        
        # ตรวจสอบว่าไฟล์มีอยู่หรือไม่
        if not os.path.exists(file_path):
            raise HTTPException(status_code=404, detail="ไม่พบไฟล์ที่ต้องการลบ")
        
        # ลบไฟล์
        os.remove(file_path)
        
        return {
            "success": True,
            "message": "ลบไฟล์สำเร็จ",
            "folder": folder_name,
            "filename": filename,
            "path": f"uploads/{folder_name}/{filename}"
        }
    
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="ไม่พบไฟล์ที่ต้องการลบ")
    except Exception as e:
        print(f"Error deleting file: {str(e)}")
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการลบไฟล์: {str(e)}")

# ------------------------------------

# สำหรับการแสดงรายการไฟล์ในโฟลเดอร์ที่กำหนด
@app.get("/api/v1/{folder_name}")
async def list_files_in_folder(
    folder_name: str = Path(..., description="ชื่อโฟลเดอร์")
):
    """
    แสดงรายการไฟล์ในโฟลเดอร์ที่กำหนด
    - folder_name: ชื่อโฟลเดอร์
    """
    try:
        folder_path = os.path.join(UPLOADS_DIR, folder_name)
        
        # ตรวจสอบว่าโฟลเดอร์มีอยู่หรือไม่
        if not os.path.exists(folder_path):
            raise HTTPException(status_code=404, detail="ไม่พบโฟลเดอร์ที่ต้องการ")
        
        # รับรายการไฟล์
        files = []
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            if os.path.isfile(file_path):
                file_stat = os.stat(file_path)
                files.append({
                    "filename": filename,
                    "size": file_stat.st_size,
                    "modified_time": file_stat.st_mtime,
                    "path": f"uploads/{folder_name}/{filename}"
                })
        
        return {
            "folder": folder_name,
            "file_count": len(files),
            "files": files
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการแสดงรายการไฟล์: {str(e)}")

@app.get("/api/v1")
async def list_folders():
    """แสดงรายการโฟลเดอร์ทั้งหมด"""
    try:
        folders = []
        for item in os.listdir(UPLOADS_DIR):
            item_path = os.path.join(UPLOADS_DIR, item)
            if os.path.isdir(item_path):
                file_count = len([f for f in os.listdir(item_path) if os.path.isfile(os.path.join(item_path, f))])
                folders.append({
                    "folder_name": item,
                    "file_count": file_count,
                    "path": f"uploads/{item}"
                })
        
        return {
            "folder_count": len(folders),
            "folders": folders
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"เกิดข้อผิดพลาดในการแสดงรายการโฟลเดอร์: {str(e)}")

@app.get("/health")
async def health_check():
    """ตรวจสอบสถานะของ API"""
    return {"status": "healthy", "message": "API กำลังทำงานปกติ"}

if __name__ == "__main__":
    import uvicorn
    # For development: single worker
    uvicorn.run(app, host="0.0.0.0", port=3002)

# For production, use the following command to start with multiple workers:
# uvicorn file-storage.main:app --host 0.0.0.0 --port 3002 --workers 4
# Adjust --workers according to your CPU cores and expected load.
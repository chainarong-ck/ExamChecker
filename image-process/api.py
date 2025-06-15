import base64
import json
import cv2
import filetype
import numpy as np
from io import BytesIO
from typing import List, Optional
from dataclasses import asdict, dataclass
from celery.result import AsyncResult
from fastapi import FastAPI, APIRouter, UploadFile, Form, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel
from tasks import process_predict_task

# ---------- Data class สำหรับข้อมูลต่างๆ -----------
@dataclass
class Point :
    x: int
    y: int

@dataclass
class SquareWithID :
    region_id: str
    sx: int
    sy: int
    ex: int
    ey: int

@dataclass
class Answer :
    a: bool
    b: bool
    c: bool
    d: bool
    all: bool
    point: int

@dataclass
class Result_CheckFileType :
    mime: str
    extension: str

@dataclass
class Result_DetechCircles :
    supported: bool
    center: Optional[Point] = None


# ---------- Pydantic Models สำหรับการตอบกลับ API -----------
class PredictResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    task_id: Optional[str] = None

class PredictStatusResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    status: Optional[str] = None

class checkMarkerLineForCreateTemplateResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    marker_tl: Optional[Result_DetechCircles]
    marker_tr: Optional[Result_DetechCircles]
    marker_bl: Optional[Result_DetechCircles]
    marker_br: Optional[Result_DetechCircles]

class checkMarkerLineForUploadFileAtGroupResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    marker_tl: Optional[Result_DetechCircles]
    marker_tr: Optional[Result_DetechCircles]
    marker_bl: Optional[Result_DetechCircles]
    marker_br: Optional[Result_DetechCircles]
    invert: bool

# ---------- ฟังก์ชันต่างๆ -----------
def bytesImageTocv2MatLike(img: bytes) -> cv2.typing.MatLike :
    """ แปลงรูปที่อยู่ในรูปแบบ bytes ให้อยู่ในรูป MatLike

    Args:
        img (bytes): เนื้อหารูปภาพ

    Returns:
        (cv2.typing.MatLike | None): วัตถุรูปภาพในรูปแบบ MatLike หรือคืนค่า None ถ้า img ไม่ใช้ bytes
    """

    if isinstance(img, bytes) :
        # แปลง bytes stream เป็น numpy array
        nparr = np.frombuffer(img, np.uint8)
        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        return image
    else :
        return None

def checkFileType(file: bytes) -> Result_CheckFileType | None :
    """ รับไฟล์เข้ามาและหาว่าคือไฟล์ประเภทอะไร

    Args:
        file (bytes): ไฟล์ประเภท bytes

    Returns:
        (Result_CheckFileType | None): คืนค่า Result_CheckFileType ถ้าหาประเภทไฟล์ได้ ถ้าหาไม่ได้จะคือค่า None
    """
    
    file_bytes = None
    if isinstance(file, bytes) :
        file_bytes = file

    # ตรวจสอบประเภทของไฟล์จาก bytes
    try :
        type = filetype.guess(file_bytes)
        if type is None:
            return None
        else:
            return Result_CheckFileType(
                mime = type.mime,
                extension = type.extension
            )
    except :
        return None

def detect_circles(image: cv2.typing.MatLike, top_left: Point, bottom_right: Point, blur_size: int):

    img = cv2.resize(image, (848, 1200))

    # แปลงเป็นภาพขาวดำ
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # เบลอภาพเพื่อลด noise
    gray_blurred = cv2.GaussianBlur(gray, (blur_size, blur_size), 3)
    
    # สร้าง mask สำหรับสี่เหลี่ยม
    mask = np.zeros_like(gray_blurred)
    cv2.rectangle(mask, top_left, bottom_right, 255, -1)
    
    # ใช้ mask ในการปิดบางส่วนของภาพที่อยู่นอกสี่เหลี่ยม
    masked_image = cv2.bitwise_and(gray_blurred, mask)

    # ใช้ HoughCircles เพื่อค้นหาวงกลม
    circles = cv2.HoughCircles(masked_image, cv2.HOUGH_GRADIENT, dp=1.7, minDist=100, param1=50, param2=20, minRadius=10, maxRadius=25)

    if circles is not None:
        circles = np.round(circles[0, :]).astype("int")
        if len(circles) == 1:
            circle = circles[0]
            # แปลงค่าเป็น Python int
            center_point = Point(x=int(circle[0]), y=int(circle[1]))
            return Result_DetechCircles(supported=True, center=center_point)
    
    return Result_DetechCircles(supported=False, center=None)

# ---------- FastAPI Application และ Endpoints -----------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter(prefix="/api/v1")

# Endpoint สำหรับการประมวลผลการตรวจข้อสอบ
@router.post("/predict", response_model=PredictResponse)
async def predict( 
    file: UploadFile = File(...),
    marker_tl: str = Form(...),
    marker_tr: str = Form(...),
    marker_bl: str = Form(...),
    marker_br: str = Form(...),
    t_marker_tl: str = Form(...),
    t_marker_tr: str = Form(...),
    t_marker_bl: str = Form(...),
    t_marker_br: str = Form(...),
    template_answer: str = Form(...),
    template_fill_std_id: str = Form(...),
    num_answer: str = Form(...),
):
    """ Endpoint สำหรับการประมวลผลการทำนาย
    Args:
        file (UploadFile): ไฟล์รูปภาพที่อัปโหลด
        marker_tl (str): พิกัดศูนย์กลางของมาร์คเกอร์บนซ้าย ของกระดาษคำตอบ
        marker_tr (str): พิกัดศูนย์กลางของมาร์คเกอร์บนขวา ของกระดาษคำตอบ
        marker_bl (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างซ้าย ของกระดาษคำตอบ
        marker_br (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างขวา ของกระดาษคำตอบ
        t_marker_tl (str): พิกัดศูนย์กลางของมาร์คเกอร์บนซ้าย ของเทมเพลต
        t_marker_tr (str): พิกัดศูนย์กลางของมาร์คเกอร์บนขวา ของเทมเพลต
        t_marker_bl (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างซ้าย ของเทมเพลต
        t_marker_br (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างขวา ของเทมเพลต
        template_answer (str): คำตอบเทมเพลตในรูปแบบ JSON
        template_fill_std_id (str): เทมเพลตสำหรับกรอก ID นักเรียนในรูปแบบ JSON
        num_answer (str): จำนวนคำตอบที่ต้องการประมวลผล
    Returns:
        DefaultResponse: ผลลัพธ์ของการประมวลผล
    """

    try:
        # อ่านไฟล์ที่อัปโหลด
        image_content = await file.read()

        # ตรวจสอบประเภทไฟล์
        file_type = checkFileType(image_content)
        if file_type is None:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "ไม่สามารถตรวจสอบประเภทไฟล์ได้"
                },
                status_code=500
            )
        if file_type.mime not in ["image/jpeg", "image/png"]:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "รูปแบบภาพที่ไม่ได้รับการสนับสนุน อนุญาตให้ใช้ JPEG และ PNG เท่านั้น"
                },
                status_code=400
            )
        
        # แปลงข้อมูล JSON ที่ถูกส่งมาเป็น object
        try:
            marker_tl_center: Point = Point(**json.loads(marker_tl))
            marker_tr_center: Point = Point(**json.loads(marker_tr))
            marker_bl_center: Point = Point(**json.loads(marker_bl))
            marker_br_center: Point = Point(**json.loads(marker_br))
            
            t_marker_tl_center: Point = Point(**json.loads(t_marker_tl))
            t_marker_tr_center: Point = Point(**json.loads(t_marker_tr))
            t_marker_bl_center: Point = Point(**json.loads(t_marker_bl))
            t_marker_br_center: Point = Point(**json.loads(t_marker_br))

            template_answer_json: List[List[SquareWithID]] = json.loads(template_answer)
            template_fill_std_id_json: List[List[SquareWithID]] = json.loads(template_fill_std_id)
        except Exception as e:
            return JSONResponse(
                content={
                    "success": False,
                    "message": f"รูปแบบ JSON ไม่ถูกต้อง: {str(e)}"
                },
                status_code=400
            )

        # แปลงข้อมูล num_answer เป็น int
        try:
            num_answer = int(num_answer)
        except Exception as e:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "จำนวนคำตอบต้องเป็นตัวเลข"
                },
                status_code=400
            )

        try:
            img = bytesImageTocv2MatLike(image_content)
            if img is None:
                return JSONResponse(
                    content={
                        "success": False,
                        "message": "ไม่สามารถอ่านข้อมูลรูปภาพได้"
                    },
                    status_code=400
                )
            img = cv2.resize(img, (848, 1200))  # ปรับขนาดภาพให้ตรงกับเทมเพลต

            # พิกัดของมาร์คทั้ง 4 จุดในภาพที่ตรวจจับได้ (ตามลำดับ: บนซ้าย, บนขวา, ล่างขวา, ล่างซ้าย)
            detected_points = np.array([
                [marker_tl_center.x, marker_tl_center.y],
                [marker_tr_center.x, marker_tr_center.y],
                [marker_br_center.x, marker_br_center.y],
                [marker_bl_center.x, marker_bl_center.y]
            ], dtype=np.float32)

            # พิกัดของมาร์คทั้ง 4 จุดในต้นฉบับ (ตามลำดับ: บนซ้าย, บนขวา, ล่างขวา, ล่างซ้าย)
            reference_points = np.array([
                [t_marker_tl_center.x, t_marker_tl_center.y],
                [t_marker_tr_center.x, t_marker_tr_center.y],
                [t_marker_br_center.x, t_marker_br_center.y],
                [t_marker_bl_center.x, t_marker_bl_center.y]
            ], dtype=np.float32)

            # คำนวณเมทริกซ์การเปลี่ยนมุมมอง (Perspective Transformation Matrix)
            matrix = cv2.getPerspectiveTransform(detected_points, reference_points)
            
            # ขนาดของภาพต้นฉบับ
            height, width = img.shape[:2]

            # ใช้เมทริกซ์ที่คำนวณได้ทำการเปลี่ยนมุมมองภาพให้ตรงกับต้นฉบับ
            warped_img = cv2.warpPerspective(img, matrix, (width, height))

            # ทำการแปลง `warped_img` เป็น bytes ก่อนส่งให้ Celery
            _, buffer = cv2.imencode('.jpg', warped_img)
            warped_img_bytes = base64.b64encode(buffer).decode('utf-8')
        except Exception as e:
            return JSONResponse(
                content={
                    "success": False,
                    "message": f"เกิดข้อผิดพลาดในการประมวลผลภาพ: {str(e)}"
                },
                status_code=500
            )

        try:
            task = process_predict_task.delay(
                warped_img = warped_img_bytes, 
                template_answer_json = template_answer_json,
                template_fill_std_id_json = template_fill_std_id_json,
                num_answer = num_answer,
            )

            # ส่งคืน task_id ให้ผู้ใช้เพื่อติดตามสถานะงาน
            return JSONResponse(
                content={
                    "success": True,
                    "message": "เพิ่มงานเข้าคิวประมวลผลเรียบร้อยแล้ว",
                    "task_id": task.id
                }
            )
        except Exception as e:
            return JSONResponse(
                content={
                    "success": False,
                    "message": f"เกิดข้อผิดพลาดในการเพิ่มงานเข้าคิว: {str(e)}"
                },
                status_code=500
            )

    except Exception as e:
        return JSONResponse(
            content={
                "success": False,
                "message": f"Server Error: {str(e)}"
            },
            status_code=500
        )

# Endpoint สำหรับตรวจสอบสถานะของงาน (/predict)
@router.get("/predict/status/{task_id}", response_model=PredictStatusResponse)
async def get_predict_status(task_id: str):
    """ Endpoint สำหรับตรวจสอบสถานะของงานทำนาย
    Args:
        task_id (str): รหัสของงานที่ต้องการตรวจสอบสถานะ
    Returns:
        PredictStatusResponse: ผลลัพธ์ของการตรวจสอบสถานะ
    """
    try:
        task_result = AsyncResult(task_id)
        
        if task_result.state == 'PENDING':
            return JSONResponse(
                content={
                    "success": True,
                    "message": "อยู่ในคิวรอประมวลผล",
                    "status": "queued"
                }
            )
        elif task_result.state == 'STARTED':
            return JSONResponse(
                content={
                    "success": True,
                    "message": "กำลังประมวลผล",
                    "status": "started"
                }
            )
        elif task_result.state == 'RETRY':
            return JSONResponse(
                content={
                    "success": True,
                    "message": "กำลังพยายามประมวลผลใหม่ (อาจเกิดข้อผิดพลาด)",
                    "status": "started"
                }
            )
        elif task_result.state == 'FAILURE':
            return JSONResponse(
                content={
                    "success": False,
                    "message": "เกิดข้อผิดพลาดในการประมวลผล",
                    "status": "error",
                },
            )
        elif task_result.state == 'SUCCESS':
            return JSONResponse(
                content={
                    "success": True,
                    "message": "ประมวลผลสำเร็จ",
                    "status": "success",
                }
            )
        else:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "สถานะไม่รู้จัก",
                    "status": None,
                },
            )
    except Exception as e:
        return JSONResponse(
            content={
                "success": False,
                "message": f"Server Error: {str(e)}"
            },
            status_code=500
        )

# Endpoint สำหรับตรวจสอบมาร์คเกอร์ก่อนสร้างเทมเพลต
@router.post("/checkMarkerLineForCreateTemplate", response_model=checkMarkerLineForCreateTemplateResponse)
async def checkMarkerLineForCreateTemplate(
    file: UploadFile = File(...),
    marker_tl: str = Form(...),
    marker_tr: str = Form(...),
    marker_bl: str = Form(...),
    marker_br: str = Form(...),
    line_1: Optional[str] = Form(None),
    line_2: Optional[str] = Form(None),
):
    """ Endpoint สำหรับตรวจสอบมาร์คเกอร์ก่อนสร้างเทมเพลต
    Args:
        file (UploadFile): ไฟล์รูปภาพที่อัปโหลด
        marker_tl (str): ข้อมูลมาร์คเกอร์บนซ้าย
        marker_tr (str): ข้อมูลมาร์คเกอร์บนขวา
        marker_bl (str): ข้อมูลมาร์คเกอร์ล่างซ้าย
        marker_br (str): ข้อมูลมาร์คเกอร์ล่างขวา
        line_1 (Optional[str]): ข้อมูลเส้นที่ 1 (ถ้ามี)
        line_2 (Optional[str]): ข้อมูลเส้นที่ 2 (ถ้ามี)
    Returns:
        JSONResponse: ผลลัพธ์ของการตรวจสอบมาร์คเกอร์
    """

    try:
        # อ่านไฟล์ที่อัปโหลด
        file_contents = await file.read()
        file_type = checkFileType(file_contents)
        if file_type is None:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "ไม่สามารถตรวจสอบประเภทไฟล์ได้"
                },
                status_code=500
            )

        img = bytesImageTocv2MatLike(file_contents)
        if img is None:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "ไม่สามารถอ่านข้อมูลรูปภาพได้"
                },
                status_code=400
            )
        img = cv2.resize(img, (848, 1200))  # ปรับขนาดภาพให้ตรงกับเทมเพลต
        
        # แปลงข้อมูล JSON ที่ถูกส่งมาเป็น object
        marker_tl_square: SquareWithID = SquareWithID(**json.loads(marker_tl))
        marker_tr_square: SquareWithID = SquareWithID(**json.loads(marker_tr))
        marker_bl_square: SquareWithID = SquareWithID(**json.loads(marker_bl))
        marker_br_square: SquareWithID = SquareWithID(**json.loads(marker_br))
        
        # ถ้ามีข้อมูล line_1 และ line_2 ให้แปลงเป็น object
        if line_1 is not None:
            line_1_square: SquareWithID = SquareWithID(**json.loads(line_1))
        if line_2 is not None:
            line_2_square: SquareWithID = SquareWithID(**json.loads(line_2))
        
        blur_range = [3, 5, 7, 9, 11, 13]
        tl = Result_DetechCircles(supported=False, center=None)
        tr = Result_DetechCircles(supported=False, center=None)
        bl = Result_DetechCircles(supported=False, center=None)
        br = Result_DetechCircles(supported=False, center=None)
        
        for blur in blur_range :
            # ตรวจจับวงกลมในแต่ละพิกัด
            tl = detect_circles(img, (marker_tl_square.sx, marker_tl_square.sy), (marker_tl_square.ex, marker_tl_square.ey), blur)
            tr = detect_circles(img, (marker_tr_square.sx, marker_tr_square.sy), (marker_tr_square.ex, marker_tr_square.ey), blur)
            bl = detect_circles(img, (marker_bl_square.sx, marker_bl_square.sy), (marker_bl_square.ex, marker_bl_square.ey), blur)
            br = detect_circles(img, (marker_br_square.sx, marker_br_square.sy), (marker_br_square.ex, marker_br_square.ey), blur)

        # ส่งคืนข้อมูล JSON ที่ตรวจจับได้
        return JSONResponse(content={
            "success": True,
            "message": "ตรวจจับมาร์คเกอร์สำเร็จ",
            "marker_tl": asdict(tl),
            "marker_tr": asdict(tr),
            "marker_bl": asdict(bl),
            "marker_br": asdict(br)
        })
    except Exception as e:
        return JSONResponse(
            content={
                "success": False,
                "message": f"Server Error: {str(e)}"
            },
            status_code=500
        )

# Endpoint สำหรับตรวจสอบความเข้ากันได้ของภาพก่อนอัปโหลดไฟล์ที่กลุ่ม
@router.post("/checkMarkerLineForUploadFileAtGroup", response_model=checkMarkerLineForUploadFileAtGroupResponse)
async def checkMarkerLineForUploadFileAtGroup(
    file: UploadFile = File(...),
    marker_tl: str = Form(...),
    marker_tr: str = Form(...),
    marker_bl: str = Form(...),
    marker_br: str = Form(...),
    line_1: Optional[str] = Form(None),
    line_2: Optional[str] = Form(None),
):
    """ Endpoint สำหรับตรวจสอบความเข้ากันได้ของภาพก่อนอัปโหลดไฟล์ที่กลุ่ม
    Args:
        file (UploadFile): ไฟล์รูปภาพที่อัปโหลด
        marker_tl (str): ข้อมูลมาร์คเกอร์บนซ้าย
        marker_tr (str): ข้อมูลมาร์คเกอร์บนขวา
        marker_bl (str): ข้อมูลมาร์คเกอร์ล่างซ้าย
        marker_br (str): ข้อมูลมาร์คเกอร์ล่างขวา
        line_1 (Optional[str]): ข้อมูลเส้นที่ 1 (ถ้ามี)
        line_2 (Optional[str]): ข้อมูลเส้นที่ 2 (ถ้ามี)
    Returns:
        JSONResponse: ผลลัพธ์ของการตรวจสอบมาร์คเกอร์
    """
    try:
        # อ่านไฟล์ที่อัปโหลด
        file_contents = await file.read()
        file_type = checkFileType(file_contents)
        if file_type is None:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "ไม่สามารถตรวจสอบประเภทไฟล์ได้"
                },
                status_code=500
            )

        img = bytesImageTocv2MatLike(file_contents)
        if img is None:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "ไม่สามารถอ่านข้อมูลรูปภาพได้"
                },
                status_code=400
            )
        img = cv2.resize(img, (848, 1200))  # ปรับขนาดภาพให้ตรงกับเทมเพลต
        
        # แปลงข้อมูล JSON ที่ถูกส่งมาเป็น object
        marker_tl_square: SquareWithID = SquareWithID(**json.loads(marker_tl))
        marker_tr_square: SquareWithID = SquareWithID(**json.loads(marker_tr))
        marker_bl_square: SquareWithID = SquareWithID(**json.loads(marker_bl))
        marker_br_square: SquareWithID = SquareWithID(**json.loads(marker_br))

        # ถ้ามีข้อมูล line_1 และ line_2 ให้แปลงเป็น object
        if line_1 is not None:
            line_1_square: SquareWithID = SquareWithID(**json.loads(line_1))
        if line_2 is not None:
            line_2_square: SquareWithID = SquareWithID(**json.loads(line_2))
        
        blur_range = [3, 5, 7, 9, 11, 13]
        tl = Result_DetechCircles(supported=False, center=None)
        tr = Result_DetechCircles(supported=False, center=None)
        bl = Result_DetechCircles(supported=False, center=None)
        br = Result_DetechCircles(supported=False, center=None)
        
        for blur in blur_range :
            # ตรวจจับวงกลมในแต่ละพิกัด
            tl = detect_circles(img, (marker_tl_square.sx, marker_tl_square.sy), (marker_tl_square.ex, marker_tl_square.ey), blur)
            tr = detect_circles(img, (marker_tr_square.sx, marker_tr_square.sy), (marker_tr_square.ex, marker_tr_square.ey), blur)
            bl = detect_circles(img, (marker_bl_square.sx, marker_bl_square.sy), (marker_bl_square.ex, marker_bl_square.ey), blur)
            br = detect_circles(img, (marker_br_square.sx, marker_br_square.sy), (marker_br_square.ex, marker_br_square.ey), blur)
            
        # ส่งคืนข้อมูล JSON ที่ตรวจจับได้
        return JSONResponse(
            content={
                "success": True,
                "message": "ตรวจจับมาร์คเกอร์สำเร็จ",
                "marker_tl": asdict(tl),
                "marker_tr": asdict(tr),
                "marker_bl": asdict(bl),
                "marker_br": asdict(br),
                "invert": False  # อาจจะมีการตรวจสอบการกลับด้านในอนาคต
            }
        )
    except Exception as e:
        return JSONResponse(
            content={
                "success": False,
                "message": f"Server Error: {str(e)}"
            },
            status_code=500
        )

# Endpoint สำหรับการแปลงภาพให้ตรงกับเทมเพลต
@router.post("/transform")
async def transform( 
    image: UploadFile = File(...),
    marker_tl: str = Form(...),
    marker_tr: str = Form(...),
    marker_bl: str = Form(...),
    marker_br: str = Form(...),
    t_marker_tl: str = Form(...),
    t_marker_tr: str = Form(...),
    t_marker_bl: str = Form(...),
    t_marker_br: str = Form(...)
):
        
    """ Endpoint สำหรับการแปลงภาพให้ตรงกับเทมเพลต
    Args:
        image (UploadFile): ไฟล์รูปภาพที่อัปโหลด
        marker_tl (str): พิกัดศูนย์กลางของมาร์คเกอร์บนซ้าย ของกระดาษคำตอบ
        marker_tr (str): พิกัดศูนย์กลางของมาร์คเกอร์บนขวา ของกระดาษคำตอบ
        marker_bl (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างซ้าย ของกระดาษคำตอบ
        marker_br (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างขวา ของกระดาษคำตอบ
        t_marker_tl (str): พิกัดศูนย์กลางของมาร์คเกอร์บนซ้าย ของเทมเพลต
        t_marker_tr (str): พิกัดศูนย์กลางของมาร์คเกอร์บนขวา ของเทมเพลต
        t_marker_bl (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างซ้าย ของเทมเพลต
        t_marker_br (str): พิกัดศูนย์กลางของมาร์คเกอร์ล่างขวา ของเทมเพลต
    Returns:
        StreamingResponse: ภาพที่ถูกแปลงแล้ว
    """
    try:
        # อ่านไฟล์ที่อัปโหลด
        image_content = await image.read()
        img = bytesImageTocv2MatLike(image_content)
        if img is None:
            return JSONResponse(
                content={
                    "success": False,
                    "message": "ไม่สามารถอ่านข้อมูลรูปภาพได้"
                },
                status_code=400
            )

        # แปลงข้อมูล JSON ที่ถูกส่งมาเป็น object
        try:
            marker_tl_center: Point = Point(**json.loads(marker_tl))
            marker_tr_center: Point = Point(**json.loads(marker_tr))
            marker_bl_center: Point = Point(**json.loads(marker_bl))
            marker_br_center: Point = Point(**json.loads(marker_br))
            t_marker_tl_center: Point = Point(**json.loads(t_marker_tl))
            t_marker_tr_center: Point = Point(**json.loads(t_marker_tr))
            t_marker_bl_center: Point = Point(**json.loads(t_marker_bl))
            t_marker_br_center: Point = Point(**json.loads(t_marker_br))
        except Exception as e:
            return JSONResponse(
                content={
                    "success": False,
                    "message": f"รูปแบบ JSON ไม่ถูกต้อง: {str(e)}"
                },
                status_code=400
            )

        try:
            img = bytesImageTocv2MatLike(image_content)
            if img is None:
                return JSONResponse(
                    content={
                        "success": False,
                        "message": "ไม่สามารถอ่านข้อมูลรูปภาพได้"
                    },
                    status_code=400
                )
            img = cv2.resize(img, (848, 1200))  # ปรับขนาดภาพให้ตรงกับเทมเพลต

            # พิกัดของมาร์คทั้ง 4 จุดในภาพที่ตรวจจับได้ (ตามลำดับ: บนซ้าย, บนขวา, ล่างขวา, ล่างซ้าย)
            detected_points = np.array([
                [marker_tl_center.x, marker_tl_center.y],
                [marker_tr_center.x, marker_tr_center.y],
                [marker_br_center.x, marker_br_center.y],
                [marker_bl_center.x, marker_bl_center.y]
            ], dtype=np.float32)

            # พิกัดของมาร์คทั้ง 4 จุดในต้นฉบับ (ตามลำดับ: บนซ้าย, บนขวา, ล่างขวา, ล่างซ้าย)
            reference_points = np.array([
                [t_marker_tl_center.x, t_marker_tl_center.y],
                [t_marker_tr_center.x, t_marker_tr_center.y],
                [t_marker_br_center.x, t_marker_br_center.y],
                [t_marker_bl_center.x, t_marker_bl_center.y]
            ], dtype=np.float32)

            # คำนวณเมทริกซ์การเปลี่ยนมุมมอง (Perspective Transformation Matrix)
            matrix = cv2.getPerspectiveTransform(detected_points, reference_points)
            
            # ขนาดของภาพต้นฉบับ
            height, width = img.shape[:2]

            # ใช้เมทริกซ์ที่คำนวณได้ทำการเปลี่ยนมุมมองภาพให้ตรงกับต้นฉบับ
            warped_img = cv2.warpPerspective(img, matrix, (width, height))

            _, encoded_image  = cv2.imencode('.jpg', warped_img)

            # ส่งภาพกลับไปเป็น StreamingResponse
            return StreamingResponse(BytesIO(encoded_image.tobytes()), media_type="image/jpeg")
        except Exception as e:
            return JSONResponse(
                content={
                    "success": False,
                    "message": f"เกิดข้อผิดพลาดในการประมวลผลภาพ: {str(e)}"
                },
                status_code=500
            )
    except Exception as e:
        return JSONResponse(
            content={
                "success": False,
                "message": f"Server Error: {str(e)}"
            },
            status_code=500
        )

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    # For development: single worker
    uvicorn.run(app, host="0.0.0.0", port=3001)

# For production, use the following command to start with multiple workers:
# uvicorn file-storage.main:app --host 0.0.0.0 --port 3001 --workers 4
# Adjust --workers according to your CPU cores and expected load.
import requests
import base64
import json
import numpy as np
import cv2
import tensorflow as tf
from typing import List
from celery import Celery, signals
from config import REDIS_URL, IMAGE_PROCESS_CALLBACK_URL

tf.config.threading.set_intra_op_parallelism_threads(4)
tf.config.threading.set_inter_op_parallelism_threads(4)
tf.get_logger().setLevel('ERROR')

# ฟังก์ชันเพื่ออัปเดตสถานะในฐานข้อมูล
def update_status(task_id, status):
    try:
        # ส่ง POST request ไปยัง API ภายนอก
        response = requests.post(
            IMAGE_PROCESS_CALLBACK_URL+'/update-status',
            json={
                'task_id': task_id,
                'status': status
            },
            headers={'Content-Type': 'application/json'},
        )
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Failed to update status for task {task_id}: {e}")
            
# ฟังก์ชันเพื่อบันทึกผลลัพธ์การประมวลผล
def save_result(task_id, result):
    try:
        # ส่ง POST request ไปยัง API ภายนอก
        response = requests.post(
            IMAGE_PROCESS_CALLBACK_URL+'/save-result',
            json={
                'task_id': task_id,
                'result': json.dumps(result, ensure_ascii=False)
            },
            headers={'Content-Type': 'application/json'},
        )
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Failed to save result for task {task_id}: {e}")


celery_app = Celery(
    __name__,
    broker=REDIS_URL,
    backend=REDIS_URL
)
celery_app.conf.broker_connection_retry_on_startup = True

@celery_app.task(bind=True)
def process_predict_task(
    self,
    warped_img: str,  # รับเป็น string ที่ได้จากการเข้ารหัส Base64
    template_answer_json: List[List[dict]],  # รับเป็น dictionary
    template_fill_std_id_json: List[List[dict]],  # รับเป็น dictionary
    num_answer: int,
):

    # โหลดโมเดล
    ai_cross_model = tf.keras.models.load_model('ai_model/model_ans_mix.keras')
    try:
        # แปลงกลับจาก Base64 เป็น numpy.ndarray
        img_bytes = base64.b64decode(warped_img)
        np_arr = np.frombuffer(img_bytes, np.uint8)
        warped_img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        # for return
        predict_std_fill_detail = []
        predict_std_fill_result = []
        predict_detail = []
        predict_result = []

        # Predict std id fill
        for idx, tem_std_fill in enumerate(template_fill_std_id_json):

            predict_std_detail_temp = {}

            for idy, tem in enumerate(tem_std_fill):

                tem_img = cv2.resize(warped_img[tem['sy']:tem['ey'], tem['sx']:tem['ex']], (28, 28))
                # crop image 5 pixel from each side
                tem_img = tem_img[5:-5, 5:-5]

                # Check if the image is mostly black or white
                gray_img = cv2.cvtColor(tem_img, cv2.COLOR_BGR2GRAY) if len(tem_img.shape) > 2 else tem_img
                binary_img = cv2.threshold(gray_img, 200, 255, cv2.THRESH_BINARY)[1]

                cal_img = binary_img.astype('float32') / 255.0
                cal_img = np.expand_dims(cal_img, axis=0)
                white_ratio = np.sum(cal_img) / cal_img.size

                predict_std_detail_temp[f"n{idy}"] = float(white_ratio)

            predict_std_fill_detail.append(predict_std_detail_temp)

            # Find the digit position that has a value of 1
            fills_black = []
            for digit_pos, value in predict_std_detail_temp.items():
                if value < 0.5:
                    # Extract the digit from the key (e.g., "n5" -> 0.1213456)
                    fills_black.append(digit_pos)

            if len(fills_black) == 0:
                predict_std_fill_result.append("x")
            else:
                if len(fills_black) == 1:
                    predict_std_fill_result.append(int(fills_black[0][1:]))
                else:
                    # Find the digit with the most black pixels (lowest white_ratio)
                    min_white_ratio = float('inf')
                    most_black_digit = None

                    for digit_pos in fills_black:
                        white_ratio = predict_std_detail_temp[digit_pos]
                        if white_ratio < min_white_ratio:
                            min_white_ratio = white_ratio
                            most_black_digit = digit_pos

                    if most_black_digit:
                        predict_std_fill_result.append(int(most_black_digit[1:]))
                    else:
                        predict_std_fill_result.append("x")

        # Predict answer
        for idx in range(num_answer):

            a_box = template_answer_json[idx][0]
            b_box = template_answer_json[idx][1]
            c_box = template_answer_json[idx][2]
            d_box = template_answer_json[idx][3]
            
            a_img = cv2.resize(warped_img[a_box['sy']:a_box['ey'], a_box['sx']:a_box['ex']], (26, 26))
            b_img = cv2.resize(warped_img[b_box['sy']:b_box['ey'], b_box['sx']:b_box['ex']], (26, 26))
            c_img = cv2.resize(warped_img[c_box['sy']:c_box['ey'], c_box['sx']:c_box['ex']], (26, 26))
            d_img = cv2.resize(warped_img[d_box['sy']:d_box['ey'], d_box['sx']:d_box['ex']], (26, 26))

            # โค้ดดักเก็บรูปภาพสำหรับทำ Dataset (ตัวอย่าง)
            # cv2.imwrite(f"temp/outputFileName_a_img.png", a_img)
            # cv2.imwrite(f"temp/outputFileName_b_img.png", b_img)
            # cv2.imwrite(f"temp/outputFileName_c_img.png", c_img)
            # cv2.imwrite(f"temp/outputFileName_d_img.png", d_img)

            a_img = a_img.astype('float32') / 255.0
            a_img = np.expand_dims(a_img, axis=0)
            b_img = b_img.astype('float32') / 255.0
            b_img = np.expand_dims(b_img, axis=0)
            c_img = c_img.astype('float32') / 255.0
            c_img = np.expand_dims(c_img, axis=0)
            d_img = d_img.astype('float32') / 255.0
            d_img = np.expand_dims(d_img, axis=0)

            # predict classes =>  cancle  cross  blank
            a_predictions = ai_cross_model.predict(a_img, verbose=0)
            b_predictions = ai_cross_model.predict(b_img, verbose=0)
            c_predictions = ai_cross_model.predict(c_img, verbose=0)
            d_predictions = ai_cross_model.predict(d_img, verbose=0)

            a_predicted = np.argmax(a_predictions[0])
            b_predicted = np.argmax(b_predictions[0])
            c_predicted = np.argmax(c_predictions[0])
            d_predicted = np.argmax(d_predictions[0])
            
            predict_detail.append({
                "a": [float(item) for item in a_predictions[0]],
                "b": [float(item) for item in b_predictions[0]],
                "c": [float(item) for item in c_predictions[0]],
                "d": [float(item) for item in d_predictions[0]]
            })
            
            predict_result.append({
                "a": int(a_predicted),
                "b": int(b_predicted),
                "c": int(c_predicted),
                "d": int(d_predicted)
            })
            
        return {
            "predict_std_fill_detail": predict_std_fill_detail,
            "predict_std_fill_result": predict_std_fill_result,
            "predict_detail": predict_detail,
            "predict_result": predict_result,
        }
        
    except Exception as e:
        raise e

# Signal ก่อนที่จะเริ่มกระบวนการ
@signals.task_prerun.connect
def task_started_handler(sender=None, task_id=None, task=None, **kwargs):
    update_status(task_id, 'processing')

# Signal หลังจากกระบวนการเสร็จสิ้น
@signals.task_postrun.connect
def task_completed_handler(sender=None, task_id=None, task=None, **kwargs):
    if kwargs.get('state') == 'SUCCESS' and kwargs.get('retval'):
        save_result(task_id, kwargs['retval'])
    else:
        update_status(task_id, 'error')
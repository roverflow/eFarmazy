from fastapi import APIRouter, Depends, Request
from bson.objectid import ObjectId
from app.serializers.userSerializers import userResponseEntity
import requests
from app.database import User
from .. import schemas, oauth2
from celery import Celery

router = APIRouter()
celery = Celery(__name__, broker='redis://localhost:6379/', backend='mongodb://newuser:password123@localhost:27017/')

@router.get("/test", tags=["status"])
def test():
    r = celery.send_task('health_check')
    return {"status": "ok", "task_id": r.id, "task_status": r.status}

@router.get('/me', response_model=schemas.UserResponse)
def get_me(user_id: str):
    user = userResponseEntity(User.find_one({'_id': ObjectId(str(user_id))}))
    return {"status": "success", "user": user}

@router.post("/sms")
async def sms_reply(request: Request):
    form_data = await request.form()
    media_url = form_data.get('MediaUrl0', None)
    if media_url:
        response = requests.get(media_url)
        with open('image.jpg', 'wb') as f:
            f.write(response.content)
        message = "Image downloaded successfully!"
    else:
        message = "No image found."
    return str(message)

@router.post("/register_stash")
async def register_stash(yexpected_price: int,yproduct_name: str, yproduct_image: str, category: str, user_id: str):
    r = celery.send_task('register_stash', args=[yexpected_price, yproduct_name, yproduct_image, category])
    return {"status": "success", "message": "Stash registered successfully", "task_id": r.id, "task_status": r.status}

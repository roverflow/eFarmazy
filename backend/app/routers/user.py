from fastapi import APIRouter, Depends, Request
from bson.objectid import ObjectId
from app.serializers.userSerializers import userResponseEntity
import requests
from app.database import User
from .. import schemas, oauth2
router = APIRouter()


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

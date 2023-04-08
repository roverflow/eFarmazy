from fastapi import APIRouter, Depends, Request, UploadFile, File
from bson.objectid import ObjectId
from app.serializers.userSerializers import userResponseEntity, CovEntity, listFruit
import requests
from app.database import User, db
from .. import schemas, oauth2
from celery import Celery
from pathlib import Path
import uuid


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

@router.get('/getStash')
def get_me(user_id: str):
    user = User.find_one({'_id': ObjectId(str(user_id))})
    resp = CovEntity(user['stashes'])
    return {"status": "success", "user": resp}

@router.get("/banana")
async def banana():
    call = db['banana'].find({})
    resp = listFruit(call)
    return {
        "status" : "scuss",
        "data" : resp
    }

@router.get("/tomato")
async def tomato():
    call = db['tomatp'].find({})
    resp = listFruit(call)
    return {
        "status" : "scuss",
        "data" : resp
    }

@router.get("/potato")
async def potato():
    call = db['potato'].find({})
    resp = listFruit(call)
    return {
        "status" : "scuss",
        "data" : resp
    }
@router.get("/orange")
async def orange():
    call = db['orange'].find({})
    resp = listFruit(call)
    return {
        "status" : "scuss",
        "data" : resp
    }

@router.post("/register_stash")
async def register_stash(yexpected_price: int,yproduct_name: str, 
                         category: str, user_id: str, yproduct_image: UploadFile=File(...)):
    mimetypes = ["image/png" , "image/jpeg", "image/jpg"]
    if yproduct_image.content_type not in mimetypes:
        return {"status": "error", "message": "File type not allowed"}

    try:
        uid = str(uuid.uuid4().fields[-1])[:10]
        fileLocation = f"{str(Path.home())}/dataPath/{user_id}/{uid}.{yproduct_image.filename.split('.')[-1]}"
        Path(f"{str(Path.home())}/dataPath/{user_id}").mkdir(parents=True, exist_ok=True)
        with open(fileLocation, "wb+") as file_object:
            file_object.write(yproduct_image.file.read())
        r = celery.send_task('register_stash', args=[yexpected_price, yproduct_name, fileLocation, category, user_id])
        return {"status": "success", "message": "Stash registered successfully", "task_id": r.id, "task_status": r.status}
    except Exception as e:
        return {"status": "error", "message": str(e)}
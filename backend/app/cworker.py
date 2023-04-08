from celery import Celery
from bson.objectid import ObjectId
from pymongo import mongo_client
from support import predict
import logging

logging.basicConfig(filename='tasks.log', level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


app = Celery('cworker',broker='redis://localhost:6379/', backend='mongodb://newuser:password123@localhost:27017/')
client = mongo_client.MongoClient('mongodb://newuser:password123@localhost:27017/')
db = client['testx']
User = db.users

@app.task(name='health_check')
def health_check():
    return "OK, I'm alive!."


@app.task(name='register_stash')
def register_stash(yexpected_price: int,yproduct_name: str, yproduct_image: str, category: str, user_id: str):
    try:
        user = User.find_one({'_id': ObjectId(str(user_id))})
        if user:
            stash = {
                "expected_price": yexpected_price,
                "product_name": yproduct_name,
                "product_image": yproduct_image,
                "category": category,
                "user_id": user_id
            }
            logging.info(f'stash dict done')
            label , score = predict(yproduct_image)
            stash['label'] = label
            stash['score'] = score
            logging.info(f'prediction done')
            User.update_one({'_id': ObjectId(str(user_id))}, {'$push': {'stashes': stash}})

            return "Stash registered successfully"
        else:
            return "User not found"
    except Exception as e:
        return str(e)
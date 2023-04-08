from pymongo import mongo_client
import pymongo
from app.config import settings
import time

connected = False
while not connected:
    try:
        time.sleep(5)
        print("Trying to connect to MongoDB...")
        client = mongo_client.MongoClient(settings.DATABASE_URL)
        conn = client.server_info()
        connected = True
        print(f'Connected to MongoDB {conn.get("version")}')
    except Exception:
        print("Unable to connect to the MongoDB server.")
        time.sleep(5)

db = client[settings.MONGO_INITDB_DATABASE]
User = db.users
User.create_index([("email", pymongo.ASCENDING)], unique=True)

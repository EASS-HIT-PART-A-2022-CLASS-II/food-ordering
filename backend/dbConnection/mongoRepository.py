
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
conn_str = "mongodb+srv://food-ordering-backend:LUrb0oCWj73XGUD1@clusterfoodordering.vbb1tnt.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(conn_str, server_api=ServerApi('1'), serverSelectionTimeoutMS=5000)
db =client["food_ordering_data"]
collection = db["restaurants"]


def get_collection_object():
    return collection

def get_all_dishes():
    menues = [];
    for menu in collection.find({},{'_id': 0,"menu":1}):
        for e in list(menu.values()):
            content=next(iter(next(iter(menu.values()))))
            menues.append(content['name'].lower())
    menues=list(set(menues))
    menues.sort()
    return menues

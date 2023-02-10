from fastapi import FastAPI
from backend.mock import *
from backend.models.types import *
from backend.models.models import Order
from fastapi.middleware.cors import CORSMiddleware
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from backend.dbConnection.mongoRepository import *
import awkward as ak

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def getInitDate():
    restaurantTypesKeys=ak.Array([e.value for e in RestaurantType])
    restaurantTypesNames=ak.Array([e.name for e in RestaurantType])
    dishesResult=get_all_dishes()
    restaurantTypesResult=ak.zip({"index": restaurantTypesKeys, "name": restaurantTypesNames}).to_list()
    return {"restaurantTypes":restaurantTypesResult,"dishes":dishesResult}

# http://127.0.0.1:8000/restaurants/get-by-city?city=Tel%20Aviv
@app.get("/restaurants/get-by-city")
# collection= get_collection_object()
#     obj=collection.find_one({ "name": "Roberta vinci" },{'_id': 0})
def Get_restaurants_by_city(city:str):
    result=list(filter(lambda restaurant: restaurant.address.city == city, restaurants))
    return result

# http://127.0.0.1:8000/restaurants/get-by-type?restaurant_type=2
@app.get("/restaurants/get-by-type")
def Get_restaurants_by_type(restaurant_type:int):
    return list(filter(lambda restaurant: restaurant.type.value == restaurant_type, restaurants))

# http://127.0.0.1:8000/restaurants/get-by-dish?dish_name=Nuggets
@app.get("/restaurants/get-by-dish")
def Get_restaurants_by_dish_name(dish_name):
    return list(filter(lambda restaurant: list(filter(lambda dish: dish.name == dish_name,restaurant.menu)), restaurants))

@app.post("/submit/place-order")
def Place_order(order:Order):
    return {"message":"We successfully got your order!"}
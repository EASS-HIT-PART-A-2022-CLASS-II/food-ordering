from fastapi import FastAPI
from backend.mock import *
from backend.models.types import *
from backend.models.models import Order

app = FastAPI()


@app.get("/")
def home():
    return {"message":"This is The Default Page"}

# http://127.0.0.1:8000/restaurants/get-by-city?city=Tel%20Aviv
@app.get("/restaurants/get-by-city")
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
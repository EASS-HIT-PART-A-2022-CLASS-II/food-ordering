from fastapi import FastAPI
from backend.mock import *
from models.types import *
from models.models import Order

app = FastAPI()


@app.get("/")
def home():
    return {"message":"This is The Default Page"}

@app.get("/restaurants/get-by-city")
def Get_restaurants_by_city(city:str):
    return filter(lambda restaurant: restaurant.address.city == city, restaurants)

@app.get("/restaurants/get-by-type")
def Get_restaurants_by_type(restaurantType:RestaurantType):
    return filter(lambda restaurant: restaurant.type == restaurantType, restaurants)

@app.get("/restaurants/get-by-dish")
def Get_restaurants_by_dish_name(dish_name):
    return filter(lambda restaurant: filter(lambda dish: dish.name == dish_name,restaurant.menu), restaurants)

@app.post("/submit/place-order")
def Place_order(order:Order):
    return {"message":"We successfully got your order!"}
from pydantic import BaseModel
from datetime import datetime
from models.types import *

class Address(BaseModel):
    city:str
    street:str
    street_number:int
    latitude:float|None
    longtitude:float |None   


class Dish(BaseModel):
    name:str
    price:float
    currency:Currency
    

class Restaurant(BaseModel):
    name: str
    type:RestaurantType
    address:Address
    manu: list[Dish]

class CreditCardDetails(BaseModel):
    cardNumber:str
    expiredDate:datetime
    cvv:str

class Order(BaseModel):
    restaurantName:str
    dishes:list[Dish]
    paymentMethod:PaymentMethod
    paymentDetails:CreditCardDetails|None
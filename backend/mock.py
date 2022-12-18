from models.models import Restaurant,Dish,Address
from models.types import RestaurantType,Currency

dish1=Dish(
    name="Hamburger",
    price=5,
    currency=Currency.dolar
)

dish2=Dish(
    name="Nuggets",
    price=3,
    currency=Currency.dolar
)

restaurant1= Restaurant(
    name= "mcDonalds",
    type=RestaurantType.american,
    address=Address(
        city="Tel Aviv",
    street="Rotchild",
    street_number=100,
    ),
    manu= [dish1,dish2]
)

restaurant2= Restaurant(
    name= "BBB",
    type=RestaurantType.american,
    address=Address(
        city="Ramat Gan",
    street="Jabutinsky",
    street_number=34,
    ),
    manu= [dish1]
)

restaurants=[restaurant1,restaurant2]

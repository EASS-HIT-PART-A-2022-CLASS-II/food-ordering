import { CircularProgress, List, ListItem, Typography } from "@mui/material"
import { useEffect } from "react"
import { Header } from "src/components/Header/Header"
import { ResautantCard } from "src/components/ResautantCard/RestaurantCard"

export const ResultsPage = (props) => {
    const { searchResults,restaurantTypes } = props;
    useEffect(() => {
     console.log(restaurantTypes);
    }, [restaurantTypes])

    const updatedRestaurant=(index,restaurant)=>{
        const restaurantType=restaurantTypes.find((type)=>type.index===restaurant.type);
        restaurant.type=restaurantType?.name;
        const grades=restaurant.grades.map((grade)=>{
            grade.date=new Date(grade.date).toDateString()
            return grade;
        })
        restaurant.grades=grades;
        return { id: index, ...restaurant }
    }

    return (
        <div>
            <Header title="Search Results" />
            {searchResults ?
                <div className="body-container">
                    <List>
                        {searchResults.map((result, index) => {
                            return  <ListItem><ResautantCard  restaurant={updatedRestaurant(index,result)} /></ListItem>
                        })}

                    </List>
                </div> : <div className="body-container">
                    <Typography className="body-header" variant="h3">Please wait!</Typography>
                    <CircularProgress />
                </div>}
        </div>
    )
}
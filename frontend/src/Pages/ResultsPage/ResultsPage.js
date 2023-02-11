import { CircularProgress, List, Typography } from "@mui/material"
import { useEffect } from "react"
import { Header } from "src/components/Header/Header"
import { ResautantCard } from "src/components/ResautantCard/RestaurantCard"

export const ResultsPage = (props) => {
    const { searchResults } = props;
    useEffect(() => {

    }, [])

    return (
        <div>
            <Header title="Search Results"/>
            {searchResults ?
                <div className="body-container">
                    <List>
                        <ResautantCard restaurant={{id:1,type:"italian",name:"Tamara",address:{city:"Rehovot",street:"herzel",street_number:1},grades:[{date:"2020-10-10",grade:'A',score:"10"},{date:"2020-10-10",grade:'B',score:"19"}]}}/>
                    </List>
                </div> : <div className="body-container">
                    <Typography className="body-header" variant="h3">Please wait!</Typography>
                    <CircularProgress />
                </div>}
        </div>
    )
}

import { Button, ButtonGroup, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Header } from "src/components/Header/Header"
import { choosingMethods } from "src/constants"
import { getDefault } from "src/network/requests"
import './WelcomePage.css'
import foodLocation from '../../foodLocation.png'
import { ChoosingMethods } from "src/components/ChoosingMethod/CoosingMethodsAutocomplete"
import { useNavigate } from "react-router-dom"


export const WelcomePage = () => {
    const navigate = useNavigate();

    const [choosingMethod,setChoosingMethod]= useState({label:"", id:0});

    useEffect(() => {
        getDefault()
    }, [])

    return (
        <div>
            <Header />
            <div className="body-container">
                <div className="row">
                    <img style={{ height: '50px', width: '50px', margin: '0px 5px' }} src={foodLocation} alt="logo" />
                    <Typography className="body-header" variant="h3">Food delivery app</Typography>
                    <img style={{ height: '50px', width: '50px', margin: '0px 5px' }} src={foodLocation} alt="logo" />
                </div>
                <Typography style={{ marginBottom: '10px' }} variant="h5">Please choose ordering method</Typography>
                <ButtonGroup variant="outlined" color="primary" aria-label="outlined primary button group">
                {choosingMethods.map((method)=><Button className='option-button' onClick={()=>setChoosingMethod(method)}>{method.label}</Button>)}
                </ButtonGroup>
                <ChoosingMethods method={choosingMethod}/>
            </div>
            <div className="footer">
                <Button onClick={()=>navigate("/restaurants")}>Search</Button>
            </div>
        </div>
    )
}
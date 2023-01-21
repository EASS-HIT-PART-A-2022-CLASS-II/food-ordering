import React from 'react';
import './Header.css';
import deliveryLogo from '../../deliveryLogo.png'

export const Header =(props)=>{
    return (
    <div className="Header">
        <img style={{height:'80px',width:'85px',margin:'10px 5px'}} src={deliveryLogo} alt="logo" />
    </div>
    )
}
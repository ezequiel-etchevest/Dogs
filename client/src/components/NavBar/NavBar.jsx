import React from "react";
import './NavBar.css'
import navImage from '../../images/dogNav.jpg'

export default function NavBar(){
    return(
    <div className="topnavland">
        <img className='navlogo' src ={navImage} alt='Nav not found' height='60px' width='60'/>
    </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import './NavBarHome.css'
import navImage from '../../images/dogNav.jpg'


export default function NavBarCreateDog(){
    return(
    <div className="topnav">
        <div className="links">
            <Link to = '/' className='linkNav'> Exit </Link>
            <Link to = '/home' className='linkNav'> Back to Home </Link>
        </div>
        <div className="dogapi">THE DOG API</div>
        <div className="searchlogo">
            <img className='navlogo' src ={navImage} alt='Nav not found' />
        </div>
    </div>
    )
}
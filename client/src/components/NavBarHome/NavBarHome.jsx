import React from "react";
import { Link } from "react-router-dom";
import './NavBarHome.css'
import navImage from '../../images/dogNav.jpg'
import SearchBar from '../SearchBar/SearchBar';

export default function NavBarHome(){
    return(
    <div className="topnav">
        <div className="links">
            <Link to = '/' className='linkNav'> Exit </Link>
            <Link to = '/dogs' className='linkNav'> Create Dogs </Link>
        </div>
        <div className="dogapi">THE DOG API</div>
        <div className="searchlogo">
            <SearchBar/>
            <img className='navlogo' src ={navImage} alt='Nav not found' />
        </div>
    </div>
    )
}
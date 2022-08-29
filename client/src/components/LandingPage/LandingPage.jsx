import React from 'react';
import { Link } from 'react-router-dom'
import landingImage from '../../images/dog.jpg'
import './landingPage.css'
import NavBar from '../NavBar/NavBar';

export default function LandingPage(){
    return (
        <div>
            <NavBar/>
            <div className = 'landing-container'>
                <div className='landing-img'>
                    <img src={landingImage} alt='LandingImage not found'/>
                </div>
                <div className='landing-title'>
                    <div className='the'> THE </div>
                    <div className='dog'> DOG </div>
                    <div className='api'>API </div>
                <Link to = '/home' className='Link'>
                    <button className='start'> Start </button>
                </Link>
                </div>
                
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import defaultIMG from '../../images/defaultIMG.jpg'
import './Cards.css'

const DogCard = ({ id, name, image, temperaments, weight_max, weight_min, height_min, height_max, life_span }) => {
    return(

            <div className='dogscard'>
                <div className='cardtitle'>
                    <h3 className='text-title'>{ name }</h3>
                    <img src={ image ? image : defaultIMG } alt='img not found ' className='dogimage' width='300px' height='300px'/>
                </div>
                <div className='dogscard-details'>
                        <h4 className='text-body'> Temperaments: { temperaments } </h4>
                        <h4 className='text-body'> Life Span: { life_span }</h4>
                        <h4 className='text-body'> Average Weigth: { weight_min} - { weight_max } kg  </h4>
                        <h4 className='text-body'> Average Heigth: { height_min } - { height_max } cm </h4>
                </div>
                <div>
                    <Link to= {'/dogs/'+ id}>
                    <button className='dogscard-button' > More ... </button>
                    </Link>
                </div>
                </div>
    );

};

export default DogCard;
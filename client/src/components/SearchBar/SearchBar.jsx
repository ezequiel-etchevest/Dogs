import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDogsNames } from '../../actions';
import './SearchBar.css' 

const SearchBar = () => {
    const dispatch = useDispatch()
    const[name, setName] = useState('')
    
    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getDogsNames(name))
        setName('')
    }

    return(
        <div className='input-group'>
            <button className='search' type = 'submit' onClick={(e) => handleSubmit(e)}> Search </button>
            <input className='input' type = 'search' value = {name} placeholder='Breed Name...' onChange={(e) => handleInputChange(e)}/>
        </div>
    )
}

export default SearchBar
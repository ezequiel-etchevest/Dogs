import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getTemperaments, postDog } from '../../actions/index.js'
import formValidation from '../DogCreate/formValidation';
import './DogCreate.css'
import NavBarCreateDog from '../NavBarHome/NavBarCreateDog';



const DogCreate = () => {
const dispatch = useDispatch()
const temperaments = useSelector((state) => state.temperaments)
const history = useHistory()
const [errors, setErrors] = useState({})
const [validate, setValidate] = useState(false)

const [input, setInput] = useState({
    name:'',
    height_max:'',
    height_min:'',
    weight_max:'',
    weight_min:'',
    life_span:'',
    image:'',
    temperaments:[]
})
const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(formValidation({
        ...input,
        [e.target.name] : e.target.value
    }))
    
    if(!errors.name && !errors.height_max && !errors.height_min && !errors.weight_max && !errors.weight_min){
        return setValidate(true)
    } else setValidate(false)    
}
const handleSelect = (e) => {
    setInput({
        ...input,
        temperaments:[...input.temperaments, e.target.value ]
        })
}
const handleDelete = (e) => {
    setInput({
        ...input,
        temperaments:input.temperaments.filter(d => d !== e.target.value)
        })
}
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postDog(input))
    alert('Dog Created Successfully!')
    setInput({    
        name:'',
        height_max:'',
        height_min:'',
        weight_max:'',
        weight_min:'',
        life_span:'',
        image:'',
        temperaments:[]
})
history.push('/home')
}


useEffect(() => {
    dispatch(getTemperaments())
}, [dispatch]);

return(
<div>
    <NavBarCreateDog/>
    <h1 className='title'>Create your Dog !</h1>
    <div className='container'>
    <div className='form-container'>
    <form onSubmit = {e => handleSubmit(e)} className='form'>
        <div className='lineupD'>
            <label className='coloreD'>Name: </label>
            <input 
                className='inputD'
                type = 'text'
                value= {input.name}
                name= 'name'
                onChange={e => handleChange(e)}
                />
        </div>
        {
            errors.name && <div className='errors'>{errors.name}</div>
        }
        
        <div className='lineupD'> 
            <label className='coloreD'>Minimum Height: </label>
            <input
                className='inputD' 
                type = 'number'
                value= {input.height_min}
                name= 'height_min'
                placeholder='Min heigth cm'
                onChange={e => handleChange(e)}
                />
        </div>
        {
            errors.height_min &&(<div className='errors'>{errors.height_min}</div>)
        }

        <div className='lineupD'>
            <label className='coloreD'>Maximum Height: </label>
            <input
                className='inputD' 
                type = 'number'
                value= {input.height_max}
                name= 'height_max'
                placeholder='Max heigth cm'
                onChange={e => handleChange(e)}
                />
        </div>
        {
            errors.height_max &&<div className='errors'>{errors.height_max}</div>
        }

        <div className='lineupD'>
            <label className='coloreD'>Minimum Weight: </label>
            <input
                className='inputD' 
                type = 'number'
                value= {input.weight_min}
                name= 'weight_min'
                placeholder='Min weigth cm'
                onChange={e => handleChange(e)}
                />
        </div>
        {
            errors.weight_min &&(<div className='errors'>{errors.weight_min}</div>)
        }

        <div className='lineupD'>
            <label className='coloreD'>Maximum Weight: </label>
            <input
                className='inputD' 
                type = 'number'
                value= {input.weight_max}
                name= 'weight_max'
                placeholder='Max weigth cm'
                onChange={e => handleChange(e)}
                />
        </div>
        {
            errors.weight_max &&(<div className='errors'>{errors.weight_max}</div>)
        }        

        <div className='lineupD'>
            <label className='coloreD'>Life Span: </label>
            <input 
                className='inputD'
                type = 'text'
                value= {input.life_span}
                name= 'life_span'
                placeholder='Life span xx - xx years'
                onChange={e => handleChange(e)}
                />
        </div>
        <div className='lineupD'>
            <label className='coloreD'>Image Link: </label>
            <input 
                className='inputD'
                type = 'text'
                value= {input.image}
                name= 'image'
                placeholder='Img URL'
                onChange={e => handleChange(e)}
                />
        </div>
        <div className='lineupD'>
            <span className='coloreD'> Temperaments:  </span> 
            <select onChange ={e => handleSelect(e)}>
                {temperaments.map((temp) =>(
                    <option value = {temp.name} key = {temp.id}>{temp.name}</option>
                ))}      
            </select>
        <div className='tempmap'>
        {
        input.temperaments.map(d => {
            return (
                <div key = {d} className='spanD'>
                    <span> {d} </span>
                    <button className='numberD' value = {d} key = {d} type= "button" onClick = {(e) => handleDelete(e)}> X </button>
                </div>
                )
            })
        }
        </div>
        </div>
        <div className='submit-container'>
            <button className='submit' type='submit' disabled = {!validate} > Create Dog </button>
        </div>
    </form>
    </div>
    </div>
</div>
)
}

export default DogCreate;
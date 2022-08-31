import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, orderDogsAscDesc, orderByWeight, filterByCreation, getTemperaments, filterByTemp } from '../../actions';
import Card from '../Cards/Cards.jsx'
import Paged from '../Paged/Paged.jsx'
import NavBarHome from '../NavBarHome/NavBarHome.jsx'
import './Home.css'
import NotFound from '../../NotFound/NotFound';
import Loader  from '../../Loader/Loader';

const Home = () => {
const dispatch = useDispatch();
const allDogs = useSelector((state) => state.dogs); 
const allTemps = useSelector((state) => state.temperaments)

//Pertenece al Paginado
const [currentPage, setCurrentPage] = useState(1); //  pagina actual , empezamos por la 1, cambiará según vayan llamando
const [dogsPerPage, /*setDogsPerPage*/] = useState(8); // número de dogs por página que queremos
const lastDogIndex = currentPage * dogsPerPage // Calcular el indice de inicio 
const firstDogIndex = lastDogIndex - dogsPerPage // Calcular el indice de final , estos 2 indices servirán para hacer el corte por página y renderize los que estan entre los 2 índices 
const currentDogs = allDogs.slice(firstDogIndex, lastDogIndex)  // serían los perros que se van a renderizar según los índices
const [/*order*/, setOrder] = useState('')


const paged = (pageNumber) => {  // esta función sirve para setear la página actual , recibirá como prop el número de pagina seleccionado
    setCurrentPage(pageNumber) // es la que permitirá los cambios por página
}

useEffect (() => {
    dispatch(getDogs())
    dispatch(getTemperaments())
}, [dispatch])

const handleClick = (e) =>{
    e.preventDefault()
    dispatch(getDogs())
    setCurrentPage(1)
}
const handleOrderAscDesc = (e) =>{
    e.preventDefault()
    dispatch(orderDogsAscDesc(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
}
const handleOrderByWeight = (e) => {
    e.preventDefault()
    dispatch(orderByWeight(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
}
const handleFilterByCreation = (e) => {
    e.preventDefault()
    dispatch(filterByCreation(e.target.value))
    setCurrentPage(1)
    setOrder(`Filtrado ${e.target.value}`)
}

const handleFilterTemps =(e) => {
    e.preventDefault()
    dispatch(filterByTemp(e.target.value))
    setCurrentPage(1)
    setOrder(`Filtrado ${e.target.value}`)
}
return(
    <div className='home-container'>
        <div className='nav'><NavBarHome/></div>
        <div className='component-container'>
            <h1 className='title'> Find your Dog ! </h1>


            <div className='select-container'> 
                <select onChange = {e => {handleOrderAscDesc(e)} }>
                <option hidden> Alph Order </option>
                <option value = 'asc'> A to Z </option>
                <option value = 'desc'> Z to A </option>
                </select>
                <select onChange = {e =>{ handleOrderByWeight(e)}}> 
                <option hidden> Weight Order </option>   
                <option value = 'Weight Max'> Weight Max </option>
                <option value = 'Weight Min'> Weight Min </option>
                </select>
                <select onChange = {e => handleFilterTemps(e)}>
                <option hidden> Temps Filter </option>
                    <option value = 'All'> All </option>
                        {
                        allTemps.map(e => {
                            return( 
                                <option value = {e.name} key = {e.id} > {e.name} </option>
                                )
                            })
                        }                 
                </select>
                <select  onChange = {e => {handleFilterByCreation(e)} }>
                <option hidden> Origin Filter </option>
                    <option value = 'All'> All </option>
                    <option value = 'Created'> Created </option>
                    <option value = 'Existing'> Existing </option>
                </select>
                <button className='reload' onClick = {e => { handleClick(e) }}> Reload Dogs </button>
            </div>
            <Paged
                dogsPerPage =  {dogsPerPage}
                allDogs = {allDogs.length}
                paged = {paged}
                currentPage = {currentPage}
            />
        </div>
        <div className='dogCards'>
            {
            currentDogs.length > 0
            ? currentDogs !== '1'
                ? currentDogs.map(e => { return(    
                            <Card
                                key = {e.id}
                                id = {e.id} 
                                name = {e.name} 
                                image = {e.image} 
                                temperaments = {e.temperaments.map((c, i, a) => {
                                    if(a.length - 1 === i) return  c.name
                                    else return  `${c.name} - `
                                    })}
                                weight_max = {e.weight_max}
                                weight_min = {e.weight_min}
                                height_max = {e.height_max}
                                height_min = {e.height_min}
                                life_span = {e.life_span}
                            />
                )})
                : <NotFound/>
            : <Loader/>
            }
        </div>   
    </div>

)
}


export default Home;
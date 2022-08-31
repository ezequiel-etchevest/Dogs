import React from 'react';
import './Paged.css'

export default function Paged( {dogsPerPage, allDogs, paged, currentPage} ){
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)        
    }
    
    return (
        <nav>
            <ul className='paged'>
            <div onClick={()=>paged(currentPage === 1? currentPage : currentPage - 1 )} className='arrow' >⫷</div>
                {pageNumbers?.map(num => (
                    <div key = { num } className={ currentPage === num ? 'numberAct' : 'number'} onClick = {()=> paged(num)}>
                        <div > { num } </div>                       
                    </div>
                ))}
            <div onClick={()=>paged(currentPage === pageNumbers.length? currentPage : currentPage + 1  )} className='arrow'>⫸</div>
            </ul>
        </nav>
    )
}
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, deleteDog, cleanDetail } from '../../actions';
import defaultIMG from '../../images/defaultIMG.jpg'
import './Detail.css'
import NavBarDetail from '../NavBarHome/NavBarDetail';
import Loader  from '../Loader/Loader';
import NotFound from '../NotFound/NotFound';

export default function Detail(){

    const dispatch = useDispatch()
    const detailDog = useSelector((state) => state.detail)
    const history = useHistory()
    const { id } = useParams();
    
    
    useEffect(() => {
        if(id){
            dispatch(getDetail(id))
        }
        return () => {
            dispatch(cleanDetail())
        }
    },[dispatch, id])


    const handleDelete =(e) => {
        e.preventDefault()
        dispatch(deleteDog(id))
        alert('Dog deleted Successfully')
        history.push('/home')
    }

    

    return(
        <React.Fragment>

        <NavBarDetail/>

         <div className='detail-container'>
            {
                detailDog.length > 0 ?
                Array.isArray(detailDog)?

                <div className='dogscardD'>

                    <div className='cardtitleD'>
                        <h1 className='text-titleD'>{detailDog[0].name}</h1>
                        <img src={ detailDog[0].image ? detailDog[0].image : defaultIMG } alt='img not found ' className='dogimageD'/>
                    </div>

                    <div className='dogscard-detailsD'>
                        <div className='lineup'>
                        <h3 className='colored'> Temperaments: </h3><h3 className='text-bodyD'> { detailDog[0].temperaments.map((c, i, a) => {
                            if(a.length - 1 === i) return  c.name
                            else return  `${c.name} - `
                        })}  
                        </h3>
                        </div>
                        <div className='lineup'>
                            <h3 className='colored'> Life Span: </h3> <h3 className='text-bodyD'>{detailDog[0].life_span }</h3>
                        </div>
                        <div className='lineup'>
                            <h3 className='colored'> Average Weigth: </h3> <h3 className='text-bodyD'> { detailDog[0].weight_min} - { detailDog[0].weight_max } kg  </h3>
                        </div>
                        <div className='lineup'>
                            <h3 className='colored'> Average Heigth: </h3> <h3 className='text-bodyD'> { detailDog[0].height_min } - { detailDog[0].height_max } cm </h3>
                        </div>
                        {
                            detailDog[0].origin 
                            ? <div className='lineup'><h3 className='colored'> Origin: </h3> <h3 className='text-bodyD'> { detailDog[0].origin } </h3></div>
                            : <div className='lineup'><h3 className='colored'> Origin: </h3> <h3 className='text-bodyD'> Unknown </h3></div>
                        }
                        {
                            detailDog[0].bred_for 
                            ? <div className='lineup'><h3 className='colored'> Bred For: </h3> <h3 className='text-bodyD'> { detailDog[0].bred_for }</h3></div> 
                            : <div className='lineup'><h3 className='colored'> Bred For: </h3> <h3 className='text-bodyD'> Unknown </h3></div>
                        }
                    </div>
                    {
                        detailDog[0].createdDB ? <button className='delete' onClick={e => {handleDelete(e)}} > Delete </button> : null
                    }

                </div>
                    :<NotFound/>
                : <Loader/>

            }

        </div>
        </React.Fragment>
    )
}





import axios from 'axios';

export const GET_DOGS = 'GET_DOGS';
export const ORDER_ASCDESC = 'ORDER_ASCDESC'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'
export const FILTER_BY_CREATION = 'FILTER_BY_CREATION'
export const GET_DOGS_NAMES = 'GET_DOGS_NAMES'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'
export const POST_DOG = 'POST_DOG'
export const GET_DETAILS = 'GET_DETAILS'

export const getDogs = () => {
    return async function(dispatch){
        try{
            var json = await axios('http://localhost:3001/dogs');       
            return dispatch({
                type: GET_DOGS,
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}

export const orderDogsAscDesc = (payload) => {
    return {
        type: ORDER_ASCDESC,
        payload
    }
}

export const orderByWeight = (payload) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}

export const filterByCreation = (payload) =>{ 
    return {
        type: FILTER_BY_CREATION,
        payload
    }
}

export const getDogsNames = (name) => {
    return async function(dispatch){
        try{
            if(name){
                var json = await axios(`http://localhost:3001/dogs?name=${name}`)
                console.log(json)
                return dispatch({
                    type: GET_DOGS_NAMES,
                    payload: json.data
                })
            }
        } catch(error){
            console.log(error)
        }
    }
}

export const getTemperaments = () => {
    return async function(dispatch){
        try{
            var json = await axios('http://localhost:3001/temperaments')
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterByTemp = (temp) => {
    return{
        type: FILTER_BY_TEMP,
        payload: temp
    }
    }

export const postDog = (payload) => {
    return async function(dispatch){
        try {
            var json = await axios.post('http://localhost:3001/dogs', payload);
            console.log(json)       
            return json
        } catch (error) {
            console.log(error)
        }
    }  

}

export const getDetail = (id) => {
    return async function(dispatch){
        try {
            var json = await axios('http://localhost:3001/dogs/' + id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }  
}

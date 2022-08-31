import { GET_DOGS, ORDER_ASCDESC, ORDER_BY_WEIGHT, FILTER_BY_CREATION, GET_DOGS_NAMES, GET_TEMPERAMENTS, FILTER_BY_TEMP, POST_DOG, GET_DETAILS, DELETE_DOG } from "../actions";

const initialState = {
    dogs: [], 
    allDogs: [],
    temperaments: [],
    detail: [] 
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOGS: 
            return{ 
                ...state,
                dogs: action.payload, 
                allDogs: action.payload};
       
        case ORDER_ASCDESC: 
            const myDogs = state.dogs
            const orderAscDesc = action.payload === 'asc' 
            ? myDogs.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            : myDogs.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                return{ 
                    ...state, 
                    dogs: orderAscDesc 
                }

        case ORDER_BY_WEIGHT:
            const dogsWeightMax = state.dogs.filter(e => e.weight_max && e.weight_max !== 'NaN')
            const dogsWeightMin = state.dogs.filter(e => e.weight_min && e.weight_min !== 'NaN')

            const sortedMax = dogsWeightMax.sort(function(a,b){return b.weight_max - a.weight_max}) 
            const sortedMin = dogsWeightMin.sort(function(a,b){return a.weight_min - b.weight_min}) 
                
    
            const orderDogsByWeight = action.payload === 'Weight Max' ? sortedMax : sortedMin
                return {
                    ...state,
                    dogs: orderDogsByWeight
                }

        case FILTER_BY_CREATION:
            const allDogs3 = state.allDogs
            const creationFilter = action.payload === 'Created'
            ? allDogs3.filter(e =>  e.createdDB ) : allDogs3.filter(e => !e.createdDB)
                return {
                    ...state,
                    dogs: action.payload === 'All' ? state.allDogs : creationFilter
                }

        case GET_DOGS_NAMES:
            if(Array.isArray(action.payload)){
                return {
                    ...state,
                    dogs: action.payload
                }
            } else {
                return {
                    ...state,
                    dogs: '1'
                }
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }

        case FILTER_BY_TEMP:
            const dogsTemps = state.allDogs

            const filterByTemp = dogsTemps.filter(dog => {
                return dog.temperaments.some(temp => {
                    return temp.name === action.payload
                })
            })
            return {
                ...state,
                dogs: action.payload === 'All' ? dogsTemps : filterByTemp
            }
        
        case POST_DOG:
            return{
                ...state,
            }
        case GET_DETAILS:
            return{
                ...state,
                detail: action.payload
            }
        case DELETE_DOG :
            return{
                ...state
            }
        default:
            return state;
    }
}


export default rootReducer;
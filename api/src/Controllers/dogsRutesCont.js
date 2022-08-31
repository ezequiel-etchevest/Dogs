const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API_KEY } = process.env;

const getBreedsApi = async () => {
try{
    const allBreeds = await axios(`https://api.thedogapi.com/v1/breeds`);

    const result = await allBreeds.data.map(e => {
        return ({
            id: e.id,
            name: e.name,
            height_min: e.height.metric.split(" -")[0],
            height_max: e.height.metric.split("- ")[1],
            weight_min: e.weight.metric.split(" -")[0],
            weight_max: e.weight.metric.split("- ")[1],
            life_span: e.life_span,
            image: e.image.url,
            origin: e.origin,
            bred_for: e.bred_for,
            temperaments: [e.temperament].join().split(", ").map(e => {
                return {name: e}
            })
        })
    })
        return result
} catch(error){
    return (error)
}

    }

const getBreedsDb = async () => {
    try {
        const dogsDb = await Dog.findAll({
            include:{
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        }) 

        return dogsDb
    } catch (error) {
        return error;
    }

};
const getAllBreeds = async () => {
    const apiBreeds = await getBreedsApi()
    const dbBreeds = await getBreedsDb();
    const allBreeds = apiBreeds.concat(dbBreeds)
    return allBreeds
} ;
const createDog = async (name , height_max, height_min, weight_max, weight_min, life_span, image, temperaments) => {
    try {
        const newDog  = await Dog.create({
            name , height_max, height_min, weight_max, weight_min, life_span, image
         })
         
    temperaments.forEach(async element => {           //recorro el argumento temperaments y busco el valor en mi DB.
        const temp = await Temperament.findAll({      //guardo el objeto encontrado donde el elemento coincide con el name en la DB.
                where: {name: element}
            })
          newDog.addTemperament(temp)           //vinculo el objeto a mi Dog creado.
        });
         return newDog
    } catch (error) {
        console.log(error)
    }

};


module.exports = {
    getAllBreeds,
    createDog,
    getBreedsDb
};




const axios = require('axios');
const { Temperament } = require('../db');
const { API_KEY } = process.env

const getAllTempsApi = async () => {
   
try {   
    const apiTemps = await axios.get(`https://api.thedogapi.com/v1/breeds`); // traigo todas las razas
    const result = await apiTemps.data.map(e => {
        return e.temperament       // mapeo los temperamentos
    });

    let temps = []; 
    result.forEach(element => {
        temps = [...temps, element?.split(', ')]
    });
    
    const temps2 = temps.flat();
    const mySet = new Set(temps2)
    
  
    mySet.forEach(element => {
        if(element){
            Temperament.findOrCreate({
                where: { name: element }
            })
        }
})
} catch(error){
    return ('esta poronga rompe')
}
}
const getAllTempsDb = async () => {
    return Temperament.findAll({
        order:['name']
    })

}



module.exports = { getAllTempsDb, getAllTempsApi };
   

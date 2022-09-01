const axios = require('axios');
const { Temperament } = require('../db');
const { API_KEY } = process.env

const getAllTempsApi = async () => {
   
try {   
    const apiTemps = await axios.get(`https://api.thedogapi.com/v1/breeds`); // traigo todas las razas
    const result = await apiTemps.data.map(e => {
        return e.temperament       // mapeo los temperamentos y los guardo en la variable result ['Stubborn, Curious, Playful', 'Stubborn, Curious, Playful',...]
    });
    let temps = []; 

    result.forEach(element => {
        temps = [...temps, element?.split(', ')] //  temps = [['Mischievous', 'Affectionate','],  ['Mischievous', 'Affectionate','Agile']] 
    });
    
    const temps2 = temps.flat(); // me quedo con un unico array de temperamentos ya separados
    const mySet = new Set(temps2)   // creo una instancia de Set con mis temperamentos
    
  
    mySet.forEach(element => {          // utilizo mi set de temperamentos ya filtrados para llenar mi tabla de
        if(element){                    // temperamentos en la db
            Temperament.findOrCreate({ // pregunta si el temperamento ya existe, sino lo crea
                where: { name: element }
            })
        }
})
} catch(error){
    console.log(error)
}
}
const getAllTempsDb = async () => {
    try {
        return Temperament.findAll({       //traigo todos los temperamentos q tengo en mi Db ordenados.
            order:['name']
        })
    } catch (error) {
        console.log(error)
    }      


}



module.exports = { getAllTempsDb, getAllTempsApi };
   

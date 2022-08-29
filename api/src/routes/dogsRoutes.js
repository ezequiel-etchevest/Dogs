const  express   = require('express');
const dogsRouter = express.Router();
const { getAllBreeds, createDog }  = require('../Controllers/dogsRutesCont')
// const { Dog, Temperament } = require('../db');

//dogsRouter.use(express.json())

dogsRouter.get('/',async (req, res) => {
    try {
        const {name} = req.query;
        const allBreeds = await getAllBreeds();
        
        
        if(name){
            const filteredBreeds = await allBreeds.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));            
            
            filteredBreeds.length 
            ? res.json(filteredBreeds) 
            : res.status(404).send(`The breed ${name} doesn't exist.`);
       
        } else res.json(allBreeds)

    } catch (error) {
        console.log(error)
    }
});
         
dogsRouter.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const allBreeds = await getAllBreeds();
        
        const filteredById = await allBreeds.filter(e => e.id == id);

        filteredById.length ?
        res.json(filteredById) :
        res.status(404).send(`The ID ${id} isn't currently in our DB.`);

    } catch (Error) {
        res.status(404).send(`Error loading Api.`);
    }
});

dogsRouter.post('/', async (req, res) => {
    const { name, height_max, height_min, weight_max, weight_min, life_span, image, temperaments } = req.body;
    try{   
    const newDog = await createDog(name, height_max, height_min, weight_max, weight_min, life_span, image, temperaments)
    res.status(200).json(newDog)
} catch (error) {
    res.status(404).send(error)
}
});


module.exports = dogsRouter;
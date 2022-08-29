const { Router } = require('express');
const tempRouter = Router();
const { getAllTempsDb } = require('../Controllers/tempRutesCont');


tempRouter.get('/', async (req, res) => {
   res.send(await getAllTempsDb())
})


module.exports = tempRouter;
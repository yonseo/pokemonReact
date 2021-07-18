//IMPORT EXPRESS
const express = require('express');
//IMPORT CONTROLLER
const pokemonController = require('./../controllers/pokemonController');

//Create new instance of express router object
const router = express.Router();

//ROUTES
router.get('/', pokemonController.pokemon_read);








//EXPORT
module.exports = router;
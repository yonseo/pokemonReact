//IMPORT EXPRESS
const express = require('express');
//IMPORT CONTROLLER
const userController = require('./../controllers/usersController');

//Create new instance of express router object
const router = express.Router();

//ROUTES
router.get('/', userController.users_read);

router.get('/:id', userController.users_details);










//EXPORT
module.exports = router;
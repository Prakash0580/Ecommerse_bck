const UserRoutes = require('express').Router();
const userController = require('../controllers/user_controller.js')

UserRoutes.post('/createAccount', userController.createAccount);
UserRoutes.post('/signIn', userController.signIn)

module.exports = UserRoutes


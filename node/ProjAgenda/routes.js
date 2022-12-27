const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// HOME ROUTES
route.get('/', homeController.index)


//LOGIN ROUTES
route.get('/login/index', loginController.index);
route.post('/login/login', loginController.login);
route.post('/login/register', loginController.register);


module.exports = route;
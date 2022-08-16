const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

// HOME ROUTES
route.get('/', homeController.paginaInicial)
route.post('/', homeController.formReturn);

module.exports = route;
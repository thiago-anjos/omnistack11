const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.index)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)

routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', SessionController.create);


module.exports = routes;
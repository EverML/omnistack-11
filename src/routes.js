const express = require('express');  
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
const validators = require('./validators');



routes .post('/sessions',SessionController.create);

routes.get('/profile',validators.profile.index,ProfileController.index);


routes.get('/ongs',OngController.index);
routes.post('/ongs',validators.ongs.create,OngController.create);


routes.get('/incidents',validators.incidents.index,IncidentController.index);
routes.post('/incidents',validators.incidents.create,IncidentController.create);
routes.delete('/incidents/:id',validators.incidents.delete,IncidentController.delete);




module.exports = routes;
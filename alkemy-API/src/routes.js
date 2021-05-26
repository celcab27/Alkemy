const routes = require('express').Router();
const { getUsuarios } = require('./controllers/usuarios');

routes.get('/api/usuarios', getUsuarios);

module.exports = routes;

const routes = require('express').Router();
const { getUsuarios, getUsuario } = require('./controllers/usuarios');
const {getAllIncome, createIncome} = require('./controllers/ingresos');

routes.get('/api/usuarios', getUsuarios);
routes.get('/api/usuarios/:user', getUsuario);

routes.get('/api/ingresos', getAllIncome);
routes.post('/api/crear-ingreso', createIncome)

module.exports = routes;

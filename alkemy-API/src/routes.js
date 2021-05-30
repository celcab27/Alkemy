const routes = require('express').Router();
const { getUsuarios, getUsuario } = require('./controllers/usuarios');
const {getAllOperations, createOperation, updateOperation} = require('./controllers/operaciones');

routes.get('/api/usuarios', getUsuarios);
routes.get('/api/usuarios/:user', getUsuario);

routes.get('/api/operaciones', getAllOperations);
routes.post('/api/crear-operacion', createOperation);
routes.post('/api/actualizar-operacion', updateOperation);



module.exports = routes;

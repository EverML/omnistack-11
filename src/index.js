const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

//antes de todas las requisiciones, express convertira el body de lo que reciba a json
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
 * Primer parametro es el recurso, i.e /users 
 * 
*/ 


/**
 * Tipos de Parametros:
 * 
 * Query Params: Parametros nombrados enviados en la ruta despues del simbolo de interrogacion, 
 * commons use cases: filtros, paginacion, etc.
 * 
 * 
 * Route Params: Parametros utilizados para identificar recursos 
 * 
 * Request body: 
 */


/**
 * SQL:
 * NoSQL:
*/



/**
 * Driver: SELECT * FROM users;
 * 
 * Query Builder: table('users')
 * 
 */



app.listen(3333);
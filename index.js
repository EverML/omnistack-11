const express = require('express');


const app = express();

/*
 * Primer parametro es el recurso, i.e /users 
 * 
*/
app.get('/',(request,response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Ever Leiva'
    });
});


app.listen(3333);
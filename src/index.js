const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const server = express();




//Configuracion
server.set('port',process.env.PORT || 3000);
//Middlewares
server.use(morgan('dev'));
server.use(express.json());

//Routes
server.use('/api/nave',require('./rutas/nave.routes.js'));
//Static Files
server.use(express.static(path.join(__dirname , '/public')));
//Inicio de servidor
server.listen(server.get('port'),()=>{
    console.log('Server en puerto', server.get('port'));
});
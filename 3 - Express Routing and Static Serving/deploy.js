//Core Node
const http = require('http');

//Third party
const express = require('express');
const bodyParser = require('body-parser');  

//Resources
const defaul = require('routes/default.js')

/** IMPORTS ABOVE **/

// Defines Express "object"
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));

/** ROUTES **/
app.use(defaul);

//Deploys server non port 3500
app.listen(3500);
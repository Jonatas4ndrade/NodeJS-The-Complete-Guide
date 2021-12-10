//Core Node
const http = require('http');

//Third party
const express = require('express');

const bodyParser = require('body-parser');  
const path = require('path');

//Resources
const defaultRoute = require('./routes/default');

/** IMPORTS ABOVE **/

// Defines Express "object"
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES **/
app.use(defaultRoute);

//Deploys server non port 3500
app.listen(3500);
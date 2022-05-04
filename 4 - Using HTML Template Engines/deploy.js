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
// Global Express settings
app.set('view engine', 'pug');
app.set('views', 'templates');
// Middlewares


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));


/** ROUTES **/
app.use(defaultRoute);

//Deploys server non port 3500
app.listen(3500);
//Core Node
const http = require('http');

//Third party
const express = require('express');
const bodyParser = require('body-parser');  

/** IMPORTS ABOVE **/

// Defines Express "object"
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));

/** ROUTES **/

app.use('/users', (req, res, next) => {
    res.send('<html><h2>Registered Users:</h2><ul><li>Dummy123</li><li>JohnDoemmy</li></ul></html>');
});

app.use('/add-product', (req, res, next) => {
    res.send('<html><h2>Registered Users:</h2><ul><li>Dummy123</li><li>JohnDoemmy</li></ul></html>');
});

app.use('/', (req, res, next) => {
    res.send('<html><h1>Server up and running!<h1></html>');
});

//Deploys server non port 3500
app.listen(3500);
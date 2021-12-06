//Imports HTTP module and routes file
const http = require('http');
const pages = require('./pages');

//Deploys server using handler function from "pages" file
const mockServer = http.createServer(pages);

//Starts listener loop
mockServer.listen(3500);
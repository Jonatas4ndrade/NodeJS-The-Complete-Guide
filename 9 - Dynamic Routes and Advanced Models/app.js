const path = require('path');
// Vanilla imports above

const express = require('express');

// Middleware imports below
const bodyParser = require('body-parser');

// Modular files imports below

    // Controllers
const webErrControllers = require('./controllers/web-errors');
    // Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Templating engines settings
app.set('view engine', 'pug');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes funelling
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Houston, we got a problem.
app.use('/', webErrControllers.error404);

// Spin-up server
app.listen(3000);

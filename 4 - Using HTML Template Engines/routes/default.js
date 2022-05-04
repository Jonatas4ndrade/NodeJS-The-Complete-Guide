const router = require('express').Router();

const path = require('path');

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'templates','users.html'));
});

router.get('/', (req, res, next) => {
    res.render('index');
});

module.exports = router;
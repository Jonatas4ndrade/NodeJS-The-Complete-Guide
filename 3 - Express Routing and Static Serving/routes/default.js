const exp = require('express');
const router = exp.Router;

const path = require('path');

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'templates','users.html'));
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'templates','index.html'));
});

module.exports = router;
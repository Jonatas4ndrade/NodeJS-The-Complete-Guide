const router = require('express').Router();

const path = require('path');

//Lame data sharing
const usernames = [];

router.get('/users', (req, res, next) => {
    res.render('users', {users: usernames});
});

router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/', (req, res, next) => {
    usernames.push(req.body.user);
    res.redirect('/users')
});

exports.route = router;
exports.data = usernames;
const express = require('express');
const User = require('../model/User');
const passport = require('passport');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})

router.post('/signup', async (req, res) => {
    let { username, email, password } = req.body;
    let newuser = new User({ username, email });
    let user = await User.register(newuser, password);
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    console.log(req.user, "new");
    res.redirect('/products');
})



module.exports = router;
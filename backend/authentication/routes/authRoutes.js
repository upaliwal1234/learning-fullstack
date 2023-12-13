const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('auth/signup');
})

router.post('/register', async (req, res) => {
    const { email, password, username } = req.body;
    const user = new User({ email, username });
    const newUser = await User.register(user, password);
    // res.send(newUser);
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

// to actually login via the db
router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureMessage: true
    }),
    (req, res) => {
        // console.log(req.user);
        res.redirect('/');
    })


router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/login');
    });
})

module.exports = router;
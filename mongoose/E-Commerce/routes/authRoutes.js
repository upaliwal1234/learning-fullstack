const express = require('express');
const User = require('../model/User');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('auth/signup');
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})



module.exports = router;
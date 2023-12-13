const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./models/User')
const authRoutes = require('./routes/authRoutes');
const { isLoggedIn } = require('./middleware');

mongoose.connect('mongodb://127.0.0.1:27017/Auth')
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('error while connecting DB', err);
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 24 * 60 * 60 * 1000, // date + time in ms
        maxAge: 24 * 60 * 60 * 1000 // time in ms
    }
}

app.use(session(configSession));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})


passport.use(new LocalStrategy(User.authenticate()));




app.use(authRoutes);

app.get('/', isLoggedIn, (req, res) => {
    // res.send('You are at Home Page');
    res.render('home');
})


const PORT = 4444;

app.listen(PORT, (e) => {
    if (e) {
        console.error('Error occured', e);
    }
    else {
        console.log(`server is running at http://localhost:${PORT}`);
    }
})
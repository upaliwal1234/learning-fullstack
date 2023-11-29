const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./model/Product');
const Review = require('./model/Review');
const User = require('./model/User');
const productRoutes = require('./routes/productRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const methodOverride = require('method-override')
const authRoutes = require('./routes/authRoutes');
const passport = require('passport');
const LocalStrategy = require('passport-local');

mongoose.set('strictQuery', true); //version 7 ki vajah se

mongoose.connect('mongodb://127.0.0.1:27017/ecom')
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('error while connecting DB', err);
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true })) //body parsing middleware
app.use(methodOverride('_method'))//method override


// middleware for routers
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);


app.use(passport.initialize()); // initialize the passport
app.use(passport.session());    // a storage where our id is stored
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})
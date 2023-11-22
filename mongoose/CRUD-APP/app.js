const { log } = require('console')
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoutes')
const Product = require('./model/Product')
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/ecom')
    .then(() => { console.log('DB is connected'); })
    .catch((err) => { console.log('there is a error in connecting', err); })



app.use(productRoute)

app.listen(4400, () => {
    console.log('server is running at http://localhost:4400');
})
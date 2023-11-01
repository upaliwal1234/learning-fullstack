const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./model/Product')
const productRoutes = require('./routes/productRoutes')

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

// middleware for routers
app.use(productRoutes);

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})
const express = require('express')
const Product = require('../model/Product');
const router = express.Router()   //mini application/ instance

router.get('/', (req, res) => {
    // res.send('You are at root route')
    res.redirect('/products')
})

router.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

module.exports = router;

const express = require('express')
const Product = require('../model/Product')
const router = express.Router()
const methodOverride = require('method-override')


router.use(methodOverride('_method'))
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    // res.send('You are at root route');
    res.redirect('/products')
})

router.get('/products', async (req, res) => {
    const products = await Product.find({});
    // res.send({ products })
    res.render('index', { products });
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('show', { product });
})

router.get('/products/new', (req, res) => {
    res.render('new');
})

router.post('/products', async (req, res) => {
    const { name, image, price, description } = req.body;
    await Product.create({ name, image, price, description });
    res.redirect('/products')
})

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

module.exports = router;
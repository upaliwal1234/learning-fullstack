const express = require('express')
const Product = require('../model/Product');
const Review = require('../model/Review');
const router = express.Router()   //mini application/ instance

router.get('/', (req, res) => {
    // res.send('You are at root route')
    res.redirect('/products')
})

router.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('product/index', { products })
})

router.get('/products/new', (req, res) => {
    res.render('product/new');
})

router.post('/products', async (req, res) => {
    let { name, image, price, description } = req.body;
    await Product.create({ name, image, price, description });
    res.redirect('/products');
})

router.get('/products/:id', async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    // res.send(foundProduct);
    res.render('product/show', { foundProduct })

})

router.get('/products/:id/edit', async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id);
    res.render('product/edit', { foundProduct })
})

router.patch('/products/:id', async (req, res) => {
    let { id } = req.params;
    let { name, image, price, description } = req.body;
    await Product.findByIdAndUpdate(id, { name, image, price, description });
    res.redirect(`/products/${id}`);
})

router.delete('/products/:id', async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    for (let reviewId of product.reviews) {
        await Review.findByIdAndDelete(reviewId);
    }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

module.exports = router;
const express = require('express')
const Product = require('../model/Product');
const router = express.Router()   //mini application/ instance
const Review = require('../model/Review');


router.post('/products/:id/review', async (req, res) => {
    let { id } = req.params;
    let { rating, comment } = req.body;
    let product = await Product.findById(id);
    let review = new Review({ rating, comment });
    product.reviews.push(review);
    await product.save();
    await review.save();
    res.redirect(`/products/${id}`)
})

module.exports = router;
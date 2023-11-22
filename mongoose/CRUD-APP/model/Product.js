const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number,
        min: 0,
        require: true
    },
    image: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
const mongoose = require('mongoose');

let quoteSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true })

let Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
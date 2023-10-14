const express = require('express')  //func
const app = express()   //obj
const mongoose = require('mongoose')    //obj


mongoose.connect('mongodb://127.0.0.1:27017/cheerz')  // it (connect method) returns a promise
    .then(() => { console.log('DB Connected') }) //resolve
    .catch((err) => { console.log('Connection Err', err) }) //reject

// creating Schema
let movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    imdb: Number,
    isWatched: Boolean
})

// creating a model
let Movie = mongoose.model('Movie', movieSchema);   // model is a javascript class // it returns an object
// name of the model should be singular and its first letter must be capital

let Shaktiman = new Movie({ name: 'Shaktiman', year: 2010, imdb: 8, isWatched: false });
Shaktiman.save()
    .then(() => { console.log('saved'); })
    .catch((err) => { console.log('error', err); })

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number
})

let User = mongoose.model('User', userSchema);

app.listen(4444, () => {
    console.log('server is up at PORT', 4444);
})
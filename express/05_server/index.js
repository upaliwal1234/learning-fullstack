const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const pageName = 'index';
    res.render('index', { pageName });
})
app.get('/home', (req, res) => {
    const pageName = 'Home';
    res.render('home', { pageName });
})

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is up and running at port', 8080);
})
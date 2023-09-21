const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('search')
})
app.get('/index', (req, res) => {
    console.log(req.query);
    const { first, last } = req.query;
    const name = { first, last }
    res.render('index', { name })
})



const PORT = 5555;
app.listen(PORT, () => {
    console.log("server is up and running at PORT", PORT);
})
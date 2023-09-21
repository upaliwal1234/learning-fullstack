const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

let arr = ['sam', 'vishal', 'naman'];

app.get('/', (req, res) => {
    let randomNum = Math.floor(Math.random() * 10)
    res.render('index', { randomNum, arr })
})

app.listen(8080, () => {
    console.log('server is up and running at PORT', 8080);
})
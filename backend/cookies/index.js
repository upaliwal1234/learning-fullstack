const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('<h1>Cookie Parser</h1>')
})

app.get('/setcookies', (req, res) => {
    res.cookie('mode', 'dark');
    res.cookie('name', 'kuch bhi');
    res.cookie('location', 'earth');
    res.send('cookies set')
})

app.get('/allCookies', (req, res) => {
    res.send(req.cookies);
})

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`server is runnin at http://localhost:${PORT}`);
})
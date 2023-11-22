const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1> You are at Root route </h1>')
})

const PORT = 4000;
app.listen(4000, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})
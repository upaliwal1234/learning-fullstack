const express = require('express')
const app = express()
const path = require('path')

let todos = ["go to gym", "come back home", "padh lo"]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     res.send('Root Page');
// })

app.get('/todos', (req, res) => {
    // res.json(todos);
    res.json(todos);
})

app.post('/todos', (req, res) => {
    const { todo } = req.body;
    todos.push(todo)
    res.json({ msg: "post chal gyi hai" })
})
app.listen(8080, () => {
    console.log('server is up and running at PORT', 8080);
})
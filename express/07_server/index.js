const exp = require('constants');
const express = require('express')
const app = express();
const path = require('path')

let comments = [
    {
        id: 0,
        username: "Manoj Tiwari",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    },
    {
        id: 1,
        username: "Monu Bhaiya",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    },
    {
        id: 2,
        username: "Ravi Kishan",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    },
    {
        id: 3,
        username: "Aryan Mafia",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    }
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('You are at root path')
})

app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    let i = comments[comments.length - 1].id;
    comments.push({
        id: i + 1,
        username,
        comment
    })
    res.redirect('/comments')
})

app.listen(8080, () => {
    console.log('server is up and running at PORT', 8080);
})
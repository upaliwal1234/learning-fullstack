const exp = require('constants');
const express = require('express')
const app = express();
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')

let comments = [
    {
        id: uuid(),
        username: "Manoj Tiwari",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    },
    {
        id: uuid(),
        username: "Monu Bhaiya",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    },
    {
        id: uuid(),
        username: "Ravi Kishan",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    },
    {
        id: uuid(),
        username: "Aryan Mafia",
        comment: "ladkfnaksdjnfdnfosdafnkadjsnfjksdbfkjdsbfkjdsbfgfuidsbfiudbfiu"
    }
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    // res.send('You are at root path')
    res.redirect('/comments')
})

app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({
        id: uuid(),
        username,
        comment
    })
    res.redirect('/comments')
})

app.get('/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const comment = await comments.find((item) => { return item.id == commentId });
    // console.log(comment);
    res.render('comment', { comment });
})

app.get('/comments/:commentId/edit', async (req, res) => {
    const { commentId } = req.params;
    const comment = await comments.find((item) => { return item.id == commentId });
    res.render('edit', { comment });
})

app.patch('/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const { comment } = req.body;
    const comm = await comments.find((item) => { return item.id == commentId })
    comm.comment = comment;

    res.redirect('/comments');
})

app.delete('/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const newArray = await comments.filter((item) => { return item.id != commentId })
    // console.log(newArray);
    comments = newArray;
    res.redirect('/comments')
})

app.listen(8888, () => {
    console.log('server is up and running at PORT', 8888);
})
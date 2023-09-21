const express = require('express')
const app = express()

// app.get('/r/cat', (req, res) => {
//     res.send('cat');
// })
// app.get('/r/dog', (req, res) => {
//     res.send('dog');
// })

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`You are at ${subreddit} page`);
})

app.listen(8888, () => {
    console.log("server is up and running at port 8888");
})
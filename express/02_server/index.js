const express = require('express')
const app = express()


// app.use('/cat', (req, res) => {
//     console.log('Hi i am middleware + cat');
//     res.send('<h1>You are at cat page</h1>');
// })
// app.use('/dog', (req, res) => {
//     console.log('Hi i am middleware + cat');
//     res.send('<h1>You are at dog page</h1>');
// })

// app.use is a middleware
// isme string matching hoti hai and agar sirf '/' bhi match ho jaye to chal jata hai

// app.use('/', (req, res) => {
//     res.send('error')
// })

app.get('/cat', (req, res) => {
    console.log("get request is sent at cat");
    res.send('You are at cat page');
})

app.get('/dog', (req, res) => {
    console.log("get request is sent at dog");
    res.send('You are at dog page');
})

// app.get me if /(string) is not present then we can use '*' to make a get request

app.get('*', (req, res) => {
    res.send('error');
})


// The PUT method replaces all current representations of the target resource with the request payload.

// The PATCH method applies partial modifications to a resource.

app.listen(8080, () => {
    console.log('server is running at port 8080');
})
// express is a web framework

// Difference between library and framework
// LIBRARY -------->
// i. library is flexible
// ii. There is no fixed set of rules to use the library code
// iii. Library ke code ko apne hisaab se likhte hain
// FRAMEWORK ------->
// i. Frameworks are not flexible.
// ii. There are fixed set of rules inorder to work with the framework code
// iii. Framework humare code ko khud me adapt karta hai

const express = require('express')      // function
const app = express()                   // object containing entire instance of application

// console.log(app);

// default port for backend is 8080
// default port for frontend (react.js) is 3000


app.use((req, res) => {
    // console.log("use");
    // console.log(req);
    // console.log(res);
    res.send("hello");
})


const PORT = 5500

// app.get('/', (req, res) => {
//     res.send('You are at Home Page');
// })

app.listen(PORT, () => {
    console.log("server is up and running at PORT", PORT);
})


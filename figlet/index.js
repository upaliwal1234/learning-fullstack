const figlet = require('figlet')
const color = require('colors')

figlet("Hello world !", (err, data) => {
    if (err) { throw err }
    console.log(data);
    console.log(data.rainbow);
    console.log('Hello'.zebra);
})

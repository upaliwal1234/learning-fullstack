const fs = require('fs')
// console.log(fs);
// let data = "Hello, this is sample file1";

// fs.writeFile(filename(with path if needed), data, options(includes encoding and flags and it is optional), callback function (compulsory))

// fs.writeFile('file1.txt', data, {
//     encoding: 'utf-8',
//     flag: 'w'
// }, (err) => {
//     if (err) { throw err }
//     console.log("file written successfully");
// })
// fs.writeFile('file2.txt', data, (err) => {
//     if (err) { throw err }
//     console.log("file written succesfully");
// })

// fs.readFile('file1.txt', { encoding: 'utf-8' }, (err, data) => {        //if we don't provide encoding then it will return data in the form of buffer
//     if (err) { throw err }
//     console.log(data);
// })

// fs.readFile('file1.txt', {}, (err, data) => {        //if we don't provide encoding then it will return data in the form of buffer
//     if (err) { throw err }
//     console.log(data.toString());                    //here we are using .toString() method to convert buffer to String
// })


// fs.appendFile('file1.txt', ' file system me append', {}, (err) => {
//     if (err) { throw err }
//     console.log("file written successfully");
// })

// fs.unlink("file1.txt", (err) => {
//     if (err) { throw err }
//     console.log("file deleted successfully");
// })
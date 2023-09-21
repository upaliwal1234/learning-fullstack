// let maths = require('./index');
// let { PI, sqr, add } = require('./index');
let { PI: hello, sqr, add } = require('./index');

// console.log(PI);
console.log(hello);
// console.log(maths.PI);
// console.log(maths.sqr(5));
// console.log(maths.add(2, 3));


// In case of node.js, when you require any file by default an empty object is exported from the file which was required.
// That required file will also run irrespective of we call it or not.
const path = require('path')

// console.log(path);

// path.join() neglects extra slashes
console.log(path.join('abc', 'def', 'ghi'))
console.log(path.join('abc/', 'def/', 'ghi/'))
console.log(path.join('abc//', 'def//', 'ghi//'))
console.log(path.join('//abc//', '//def//', '//ghi//'))
console.log(path.join(__dirname, 'index.js'))
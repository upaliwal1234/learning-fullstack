let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');

// addEnventListener(eventType, function(), useCapture)
// When useCapture is false(byDefault) event happens in bubbling phase otherwise it happens in capturung phase
// one.addEventListener('click', () => { console.log('one') }, true)
// two.addEventListener('click', () => { console.log('two') })
// three.addEventListener('click', () => { console.log('three') }, true)


one.addEventListener('click', (e) => {
    e.stopPropagation(); // stops the further events propagation
    console.log('one')
}, true)
two.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('two');
}, true)
three.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('three');
}, true)


// ------------------------------------------------------------ //
// let btn = document.querySelector('#btn');

// function hello() { console.log('hello') }
// function hi() { console.log('hi') }

// // btn.onclick = hello;
// // btn.onclick = hi;

// // onclick use karke only one function ko point kara sakte hain
// // to solve this problem, we use addEventListner

// btn.addEventListener('click', () => {
//     console.log('event listener');
// })
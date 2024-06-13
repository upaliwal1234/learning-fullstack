// var a = 10;

// if (true) {
//     console.log(a);
//     let a = 100;
//     console.log(a);
// // }

// function outer() {
//     function inner() {
//         console.log(x);
//     }
//     const x = 5;
//     return inner;
// }

// const inner = outer();
// inner();
// for (const i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

let a = [1, 2, 3];
let b = [7, ...a, 5];
console.log(b);
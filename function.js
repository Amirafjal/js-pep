//Non-primitive:array,objects,function
// function=>

// function sayHi() {
//     console.log("Hello from sayHi");
// }
// sayHi(10);
// sayHi("hello");
// sayHi([1, 2, 3, 4, 5]);

// -------------------------------------------

// function sayHi(params) {
//     return "returned from a function";
// }
// let rVal = sayHi([1, 2, 3, 4, 5]);
// console.log("rVal", rVal);

// --------------------------------------------

// function sayHi() {
//     let rVal = Math.random() > 0.5 ? true : "less than 0.5";
//     return rVal;
// }
// console.log("rVAl", sayHi());


// my trial works
// function sayHi() {
//     let rVal = Math.random();
//     if (rVal > 0.5) {
//         console.log("true");
//     } else {
//         console.log("Less than 0.5");
//     }
// }
// console.log(sayHi());
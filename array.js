// array declare //let arr= [];
// let array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(array.length);

// let i = 0;
// while (i < array.length) {
//     console.log("element at index ", i, "is", array[i]);
//     i++;
// }

// Push-> to add in the last
// unshift->to add in the first

let array = [1, 2, 3, 4, 5];
console.log(array);
array.push('Last Value');
array.unshift("First Value");
console.log("------------------");
console.log(array);

//shift-> to remove in first value
// pop-> to remove the last value

// array.shift();
// array.pop();
// console.log("------------------");
// console.log(array);

// slice->returns a copy of a section of an array

array.slice();
console.log(array);

let partOfAnArray = array.slice(1, 4);
console.log(partOfAnArray);
// console.log(array);

// splice->In case of delete in array

array.splice(2, 3); //2nd index se upto 3 banda remove
console.log(array);

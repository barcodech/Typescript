"use strict";
let hello = () => {
    console.log('Hello');
};
hello = () => {
    console.log('Hello2');
};
let add = (a, b, c = 50) => {
    console.log(a + b);
    console.log(c);
};
add(10, 20, 60);
let plus = (a, b) => {
    return a + b;
};
let result = plus(1, 2);
console.log(result);

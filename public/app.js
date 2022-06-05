"use strict";
//let hello: Function;
let function1;
function1 = (name, surname) => {
    console.log(`${name} ${surname}`);
};
let function2;
function2 = (number1, number2, words) => {
    if (words === 'hello') {
        return number1 + number2;
    }
    else {
        return number1 - number2;
    }
};
let function3;
function3 = (adam) => {
    console.log(`${adam.name} is ${adam.age} years old`);
};

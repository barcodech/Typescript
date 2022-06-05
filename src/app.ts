//let hello: Function;

let function1: (a: string,b: string) => void;

function1 = (name: string, surname: string) => {
  console.log(`${name} ${surname}`);
}

let function2: (a: number,b: number, c: string) => number;

function2 = (number1: number,number2: number, words: string) => {
  if (words === 'hello'){
    return number1 + number2;
  } else {
    return number1 - number2;
  }
}

type person = {name: string,age: number};

let function3: (obj: person) => void;

function3 = (adam: {name: string,age: number}) => {
  console.log(`${adam.name} is ${adam.age} years old`);
}
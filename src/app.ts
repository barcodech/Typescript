type Vartype1 = string|number;
type Objtype1 = {name: string, age: number};

let simple = (name: string, word: Vartype1) => {
    console.log(`${name} says ${word}`);
  }
 
let simple2 = (Adam: Objtype1) => {
    console.log(`${Adam.name} is ${Adam.age} years old`);
  }
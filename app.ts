var character: string = 'Adam';
var age: number;
var LoggedIn: boolean;

LoggedIn = true;
age = 20;

var barcode: string[] = ['Jack'];

//barcode = ['Adam','Jack','Matin'];
barcode.push('Adam');
//barcode.push(10);
console.log(barcode);


var mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);

var simple: string|number|boolean;

simple = 'hello';
simple = 30;
simple = true;

var people: object;
people = {name: 'Adam', age: 20};

var people1: {
    name: string,
    age: number,
    gender: boolean
};

people1 = {name: "Adam",age: 'jack', gender: true};
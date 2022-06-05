var age: any = true;

age = true;
console.log(age);
age = 'Adam';
console.log(age);
age = {name: 'jack',age: 30};
console.log(age);

var mixed: any[] = [];

mixed.push(10);
mixed.push('Adam');
mixed.push(false);
console.log(mixed);

var barcode: {name: any, age: any};

barcode = {name: 30,age: 'Adam'};
console.log(barcode);
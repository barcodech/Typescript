let hello = () => {
  console.log('Hello');

}

hello = () => {
  console.log('Hello2');
}

let add = (a: number,b:number,c: number | string = 50): void => {
  console.log(a+b);
  console.log(c);
}

add(10,20,60);

let plus = (a: number, b: number): number => {
  return a+b;
}

let result = plus(1,2);
console.log(result);
"use strict";
/*
const addUID = <T>(obj: T) => {
   let uid = Math.floor(Math.random() * 100);
   return {...obj, uid};
 }
*/
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: 'adam', age: 40 });
//let doc2 = addUID('Jack');
console.log(doc1.name);
const doc3 = {
    uid: 1,
    resourceName: 'person',
    data: 'adam'
};
const doc4 = {
    uid: 1,
    resourceName: 'person',
    data: ['cola', 'pepsi']
};

"use strict";
const me = {
    name: 'adam',
    age: 50,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I have', amount);
        return amount;
    },
};
console.log(me);
me.speak('morning');
me.spend(500);
const greeting = (person) => {
    console.log('hello', person.name);
};
greeting(me);

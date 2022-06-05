"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} buy ${this.details} for ${this.amount}`;
    }
}
const invoice1 = new Invoice('Adam', 'shirts', 250);
const invoice2 = new Invoice('Jack', 'shoes', 300);
let Invoices = [];
Invoices.push(invoice1);
Invoices.push(invoice2);
invoice1.client = 'Matin';
console.log(Invoices);

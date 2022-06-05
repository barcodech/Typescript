"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
Invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

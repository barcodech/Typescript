import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valuses;
    valuses = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...valuses);
    }
    else {
        doc = new Payment(...valuses);
    }
    list.render(doc, type.value, 'end');
});
let arr = ['adam', 30, true];
arr[0] = false;
arr[1] = 'matin';
arr = [50, false, 'matin'];
let tup = ['adam', 25, true];
tup[0] = 'jack';
let student;
student = ['john', 2000];

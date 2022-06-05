import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { Formatter } from "./interfaces/Formatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
 
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let valuses: [string,string,number];
  valuses = [tofrom.value,details.value,amount.valueAsNumber];

  let doc: Formatter;
  if (type.value === 'invoice'){
    doc = new Invoice(...valuses);
  } else {
    doc = new Payment(...valuses);
  }
  list.render(doc,type.value,'end');
});



let arr = ['adam',30,true];
arr[0] = false;
arr[1] = 'matin';
arr = [50,false,'matin'];

let tup: [string,number,boolean] = ['adam',25,true];
tup[0] = 'jack';

let student: [string,number];
student = ['john',2000];
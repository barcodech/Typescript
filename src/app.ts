class Invoice {

  constructor(
    
  readonly client: string,
  private details: string,
  public amount: number

  ){}

  format() {
    return `${this.client} buy ${this.details} for ${this.amount}`;
  }
}

const invoice1 = new Invoice('Adam','shirts',250);
const invoice2 = new Invoice('Jack','shoes',300);

let Invoices: Invoice[] = [];
Invoices.push(invoice1);
Invoices.push(invoice2);


Invoices.forEach(inv => {
  console.log(inv.client,inv.amount,inv.format());
})

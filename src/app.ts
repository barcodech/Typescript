interface Person {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: Person = {
  name: 'adam',
  age: 50,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I have', amount);
    return amount;
  },
};

console.log(me);
me.speak('morning');
me.spend(500);

const greeting = (person: Person): void => {
  console.log('hello',person.name);
}

greeting(me);
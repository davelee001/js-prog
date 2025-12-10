import { add, PI } from "./math.js";

console.log(add(5, 3));
console.log(PI);


export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

export function sayBye(name) {
  console.log(`Goodbye, ${name}!`);
}

import { sayHello, sayBye } from './greetings.js';

sayHello("Alice");  // Output: Hello, Alice!
sayBye("Alice");    // Output: Goodbye, Alice!





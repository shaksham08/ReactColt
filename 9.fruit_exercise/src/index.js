import { choice, remove } from "./helper";
import fruits from "./foods";

let fruit = choice(fruits);
console.log(`I would like one ${fruit} please`);

console.log(`Here is your ${fruit}`);

let removed = remove(fruits, fruit);
console.log(`Remainimg fruit is ${removed}`);

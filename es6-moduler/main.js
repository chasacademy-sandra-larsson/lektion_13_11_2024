
import { addition, subtraction } from "./mathUtils.js"; // Named import
import myFunc from "./mathUtils.js";  // Default import - man kan använda vilket variabelnamn som helst

const sum = addition(2,3);
const diff = subtraction(11,5);
console.log(sum);
console.log(diff);


myFunc();
/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum1 = addTwoNumbers(3, 5);
console.log(sum1);


// Arrow Function With Parameters
const multiplyTwoNumbers = (a, b) => {
    // Code block
    return a * b;
}
let sum2 = multiplyTwoNumbers(3, 5);
console.log(sum2);


// Single Line Arrow Function With Parameters
// const subtractTwoNumbers = (a, b) => (a + b); also valid
const subtractTwoNumbers = (a, b) => a - b;

let sum3 = subtractTwoNumbers(3, 5);
console.log(sum3);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World');

const sayHello = () => console.log('Hello');
sayHello();


// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());


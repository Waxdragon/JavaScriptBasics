// If condition is true, do the first thing.
// If condition is false, do the second thing.
// Great for short, simple conditions like:
//Assigning a value based on a condition
//Returning values quickly in a function

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); // Output: Odd

let num1 = -5;
let result1 = num >= 0 ? "Positive" : "Negative";
console.log(result1); // Output : Negative

let age1 = 16;
let canDrive = age1 >= 18 ? "Yes" : "No";
console.log(canDrive); // Output : No

let a = 10, b = 20;
let larger = a > b ? a : b;
console.log(larger); // Output : 20

let isMember = true;
let fee = isMember ? "$10" : "$20";
console.log(fee); // "$10" 
// assigning inside variables

let num2 = 0;
let status1 = num2 > 0 ? "Positive" : num2 < 0 ? "Negative" : "Zero";
console.log(status1); // "Zero" // combined 2 operators

let isLoggedIn = false;
let message = isLoggedIn ? "Welcome Back!" : "Please log in.";
console.log(message); // "Please log in" // instored true/false value

let num3 = 25;
const divisbleByFive = num3%5 === 0 ? "The number is divisible by five" : "The number is not divisble by five";
console.log(divisbleByFive);

let a1 = 15, b1 = 5;
const greaterThan10 = a>10 && b>10 ? "Yes" : "No";
console.log(greaterThan10);

let name2 = "";
let result2 = name2 === "" ? "Empty" : "Not Empty";
console.log(result2); // "Empty"

let a3 = 10, b3 = 20;
greater = a3>b3 ? a3 : b3;
console.log(greater);







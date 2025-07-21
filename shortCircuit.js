// logical (or) operator returns first truthy value 
// Short-circuiting is when JavaScript stops evaluating expressions as 
// soon as the result is known using && or ||.

let names = "" || "Guest";
console.log(names); // "Guest"

const userInput = "Marcus Rashford"
let username = userInput || "Anonymous";
console.log(username);

// logical (and) operator retuns last truthy or first falsy value

let isLoggedIn = true;
let message = isLoggedIn && "Welcome!";
console.log(message); // "Welcome!"

let userColor = "";
let defaultColor = "blue";
let finalColor = userColor || defaultColor;
console.log(finalColor); // blue

let isVerified = true;
isVerified && console.log("Access granted");

let val = 0 || 100;
console.log(val); // 100

let val1 = "Hi" && 0;
console.log(val1); // 0

let isLoggedIn1 = false;
let finalLogIn = isLoggedIn1 || "Please Log In";
console.log(finalLogIn);

let userInput1 = null;
let finalName = userInput1 || "Anonymous";
console.log(finalName);

let isAdmin = true;
let msg = isAdmin && "Access Granted";
console.log(msg); // "Access Granted"

let age = 0;
let finalAge = age || 18;
console.log(finalAge); // 18

let isLoggedIn2 = true;
let resultLogIn = isLoggedIn2 && "Welcome Back";
console.log(resultLogIn); // true

let a = "" && "Hello";
console.log(a); // ""

let a1 = "JS" || null;
console.log(a1); // "JS"

let hasCoupon = "FESTIVE20";
const discApp =   hasCoupon && "Discount Applied" ;
console.log(discApp);

let user = "";
let msg1 = user && "Hi" || "Guest";
console.log(msg1); // Guest

let x = 12, y = 25
let larger = x > y && x || y;
console.log(larger); // 25

let isAdmin1 = false;
isAdminTrue = isAdmin1 && "You Have Admin Access";
console.log(isAdminTrue);

let coupon = null;
const DiscCoupon = coupon || "No Discoint";
console.log(DiscCoupon);

let username2 = "";
ifGuest = username2 || "Guest";
console.log(ifGuest);

let names1 = "" || null || "Anonymous";
console.log(names1); // prints first truthy value


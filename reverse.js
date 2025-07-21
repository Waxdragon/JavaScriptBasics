// The reverse() method reverses the order of elements in an array — in place.
//It changes the original array
//Returns the same array, but reversed
// Key Point: It only works on arrays, not strings directly

let nums = [1, 2, 3];
nums.reverse();
console.log(nums); 

let word = "hello";
let reversed = word.split("").reverse().join("");
console.log(reversed); // "olleh"

let scores = [100, 90, 80];
scores.reverse(); // [80, 90, 100]

let str = "garnacho";
let result = str.split("").reverse().join(""); // "ohcanrag"


// if you don't want the original array to be modified
let arr = [1, 2, 3];
let reversed1 = [...arr].reverse(); 
console.log(arr);      // [1, 2, 3] 
console.log(reversed1); // [3, 2, 1]

nums = [5, 10, 15, 20]
console.log(nums.reverse());

country = "India"
countryResult = country.split().reverse().join("");
console.log(countryResult);

jsWorld = "Hello world this is JS"
jsWorldResult = jsWorld.split(" ").reverse().join(" ");
console.log(jsWorldResult)

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

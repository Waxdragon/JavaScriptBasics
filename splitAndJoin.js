// The split() method splits a string into an array of substrings, 
// based on a separator (like space, comma, etc.).
// string.split(separator)

let sentence = "JavaScript is awesome";
let words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]

let data = "apple,banana,grape";
let fruits = data.split(",");
console.log(fruits); // ["apple", "banana", "grape"]

let word = "hello";
let chars = word.split("");
console.log(chars); // ["h", "e", "l", "l", "o"]

let msg = "I love JavaScript so much!";
let splitMsg = msg.split(" ", 4);
console.log(splitMsg); // ["I", "love", "JavaScript"] number is equal to the number of splits

// JOIN STRING FUNCTION

// The join() method combines array elements into a string, 
// separated by a string you choose (like space, dash, etc)

let words1 = ["JavaScript", "is", "cool"];
let sentence1 = words.join(" ");
console.log(sentence1); // "JavaScript is cool"

let parts = ["2025", "07", "17"];
let date = parts.join("-");
console.log(date); // "2025-07-17"

let letters = ["H", "E", "L", "L", "O"];
let word1 = letters.join("");
console.log(word1); // "HELLO"

let animals = "Lion,Elephant,Tiger";
let resultSplit = animals.split(",");
console.log(resultSplit); // ["Lion", "Elephant", "Tiger"]

let reactJS = "ReactJS is fun"
const reactResult = reactJS.split(" ");
console.log(reactResult);

const iLoveJS = ["I", "love", "JS"];
const iLoveJS2 = iLoveJS.join(" ");
console.log(iLoveJS2);

code = "Code"
codeResult = code.split("");
console.log(codeResult);

date = ["2", "5", "7"]
dateResult = date.join("-")
console.log(dateResult);
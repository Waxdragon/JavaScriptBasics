// The replace() method is used to replace part of a string with something else.
let text = "I love bananas";
let result = text.replace("bananas", "apples");
console.log(result); // "I love apples"

//IMPORTANT
// replace() only replaces the first match unless you use a regular expression with g flag (for "global").

let sentence = "Red car, red bike, red bus";
let changed = sentence.replace("red", "blue");
console.log(changed); // "Red car, blue bike, red bus"

let sentence1 = "red car, red bike, red bus";
let changed1 = sentence.replace(/red/g, "blue");
console.log(changed1); // "blue car, blue bike, blue bus"
// using /string/g flag replaces evrything

let str = "Hello hello HeLLo";
let newStr = str.replace(/hello/gi, "hi");
console.log(newStr); // "hi hi hi"
// case insensitive, if you want it to replace regardless of its Case, then using /string/gi

let name1 = "John Doe";
let cleaned = name1.replace(" ", "-");
console.log(cleaned); // "John-Doe"

const sports = "I love football"
const resultSport = sports.replace("football","cricket");
console.log(resultSport);

lionKing = "Lion King Simba"
lionKingResult = lionKing.replace(" ", "-");
console.log(lionKingResult);

const fruits = "apple,banana,grape"
const fruitsResult = fruits.replace(/,/g,"|");
console.log(fruitsResult);

const arena = "Aardvark Arena"
const arenaResult = arena.replace(/a/gi,"@");
console.log(arenaResult);

const newSentence = "This is it. It is fine."
const newSentence1 = newSentence.replace("is","was");
console.log(newSentence1);

// Want to only replace "is" as a whole word

const sentence12 = "This is it. It is fine.";
let result1 = sentence12.replace(/\bis\b/, "was");
console.log(result1); // "This was it. It is fine."


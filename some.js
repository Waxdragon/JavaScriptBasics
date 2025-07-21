const numbers = [10, 25, 35, 40];
const hasSmallNumber = numbers.some(num => num < 20);
console.log(hasSmallNumber); //  true (10 is less than 20)

const numbers1 = [30, 40, 50];
const isThereSmall = numbers1.some(num => num < 20);
console.log(isThereSmall); // false (none < 20)

const players = [
  { name: "Bruno", goals: 8 },
  { name: "Garnacho", goals: 5 },
  { name: "Rashford", goals: 10 }
];
const hasScored10 = players.some(player => player.goals === 10);
console.log(hasScored10); // true (Rashford has 10)

const nums = [5, 8, -3, 10];
const result = nums.some(n => n < 0);
console.log(result); // true

const players2 = [
  { name: "Bruno", goals: 2 },
  { name: "Shaw", goals: 0 },
  { name: "Casemiro", goals: 1 }
];
const hasZeroScorer = players2.some(p => p.goals === 0);
console.log(hasZeroScorer); // true (Shaw)

const names = ["Fred", "McTominay", "Varane", "Maguire"];
const result1 = names.some(name => name.length > 8);
console.log(result1); //  true ("McTominay")

const scores = [67, 89, 93, 76];
const result2 = scores.some(score => score === 100);
console.log(result2); // false

const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 0 },
  { item: "Notebook", price: 150 }
];
const isAnyFree = cart.some(product => product.price === 0);
console.log(isAnyFree); // true

const fruits = ["Apple", "Banana", "Mango"];
const hasZ = fruits.some(fruit => fruit.startsWith("Z"));
console.log(hasZ); //  false

const passwords = ["123456", "admin", "abc", "supersecure"];
const isWeak = passwords.some(p => p.length < 5);
console.log(isWeak); //  true ("abc")

const players3 = [
  { name: "Bruno", yellows: 2 },
  { name: "Licha", yellows: 3 },
  { name: "Casemiro", yellows: 5 }
];
const tooManyCards = players3.some(p => p.yellows > 5);
console.log(tooManyCards); //  false

const messages = ["Hi", "Hello", "", "How are you?"];
const hasEmpty = messages.some(msg => msg === "");
console.log(hasEmpty); //  true

const nums3 = [10, 20, 30];
const hasGreaterThan25 = nums3.some(n => n > 25);
console.log(hasGreaterThan25); // true (30 > 25)

const names1 = ["David", "Alex", "Bruno", "Marcus"];
const result12 = names1.some(n => n.startsWith("A"));
console.log(result12);

const numbersEven = [1,2,33,44,56,78,90,67,45,33]
const resultNumbersEven = numbersEven.some(n => n%2 === 0);
console.log(resultNumbersEven);




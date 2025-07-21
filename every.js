const numbers = [10, 20, 30, 40];
const allAbove5 = numbers.every(num => num > 5);
console.log(allAbove5); // true

const numbers2 = [10, 20, 2, 40];
const allAbove51 = numbers2.every(num => num > 5);
console.log(allAbove51); // false (2 is not > 5)

const players = [
  { name: "Bruno", goals: 5 },
  { name: "Garnacho", goals: 7 },
  { name: "Rashford", goals: 9 }
];
const everyoneScored = players.every(player => player.goals > 0);
console.log(everyoneScored); // true

const nums = [2, 4, 6, 8];
result = nums.every(n => n % 2 === 0); // true
console.log(result);

const numbers3 = [10, 45, 70, 150];
result1 = numbers3.every(n => n>100); // false
console.log(result1);

const nums1 = [3, 10, 5, 8];
result2 = nums1.every(n => n>0);
console.log(result2);

const players1 = [
  { name: "Rashford", goals: 10 },
  { name: "Garnacho", goals: 7 },
  { name: "Mount", goals: 6 }
];
result3 = players1.every( n => n.goals>5);
console.log(result3);

const arr = ["hi", "hello", ""];
result4 = arr.every( n => "");
console.log(result4);

const products = [
  { name: "TV", inStock: true },
  { name: "Phone", inStock: true },
  { name: "Laptop", inStock: true }
];
result5 = products.every( n => n.inStock === true);
console.log(result5);

const players2 = [
  { name: "Bruno", reds: 0 },
  { name: "Casemiro", reds: 2 },
  { name: "Licha", reds: 1 }
];
result6 = players2.every(n => n.reds>3);
console.log(result6);

const emails = ["john@gmail.com", "admin@", "contact@gmail.com"];
result7 = emails.every(n => n.includes("@"));
console.log(result7);

const values = [2, 4, 6, 8];
result8 = values.every(n => n%2 === 0);
console.log(result8);

const discounts = [20, 30, 55, 60];
result9 = discounts.every(n => n<60);
console.log(result9);

const marks = [80, 45, 30, 90];
result11 = marks.every(n => n>= 35);
console.log(result11);

const numbersEven = [1,2,33,44,56,78,90,67,45,33]
const resultNumbersEven = numbersEven.every(n => n%2 === 0);
console.log(resultNumbersEven);





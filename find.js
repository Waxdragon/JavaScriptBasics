const players = [
  { name: "Garnacho", goals: 7 },
  { name: "Rashford", goals: 4 },
  { name: "Bruno", goals: 5 },
];

const result = players.find(player => player.goals > 5);
console.log(result);

// finds the first matching element according to the condition and stops the iteration 

const numbers = [3, 7, 5, 8, 10];
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); 

const users = [
  { username: "ronaldo", age: 39 },
  { username: "messi", age: 37 },
  { username: "neymar", age: 32 }
];

const messi = users.find(user => user.username === "messi");
console.log(messi); 

const nums = [1, 3, 7, 8, 10];
const firstEvenNum = nums.find(n => n%2 === 0);
console.log(firstEvenNum);

const players1 = [
  { name: "Garnacho", goals: 9 },
  { name: "Rashford", goals: 11 },
  { name: "Bruno", goals: 7 }
];
const moreGoals = players.find(n => n.goals>10);
console.log(moreGoals);

const fruits = [
  { name: "Apple", stock: 5 },
  { name: "Mango", stock: 0 },
  { name: "Banana", stock: 10 }
];

const stockFinder = fruits.find(n => n.stock === 0);
console.log(stockFinder);


const students = [
  { name: "A", marks: [80, 90, 100] },
  { name: "B", marks: [85, 88, 92] },
  { name: "C", marks: [100, 100, 100] }
];
const firstCentum = students.find(n => n.marks.includes(100));
console.log(firstCentum);

const names = ["Ron", "Marcus", "Luke", "Fernandes"];
const lengthMore5 = names.find(n => n.length > 5);
console.log(lengthMore5);

const players2 = [
  { name: "Haaland", goals: 36, position: "Striker" },
  { name: "De Bruyne", goals: 7, position: "Midfielder" },
  { name: "Saka", goals: 12, position: "Winger" }
];

const strikerAndGoals = players2.find(n => n.position === "Striker" && n.goals > 10 );
console.log(strikerAndGoals);

const nums1 = [3, 1, 2, 3, 4];
const indexEqualsno = nums1.find((num,index) => num === index);
console.log(indexEqualsno);

const players23 = [
  { name: "Xhaka", yellowCards: 3 },
  { name: "Ramos", yellowCards: 6 },
  { name: "Casemiro", yellowCards: 5 }
];

const index = players23.findIndex(player => player.yellowCards > 5);
console.log(index); 
console.log(players23[index]); 

const countries = ["India", "Australia", "Argentina", "Albania"];
const result1 = countries.find(country => {
  const lower = country.toLowerCase();
  return lower[0] === lower[lower.length - 1];
});
console.log(result1); 

const books = [{ ID : 1, Title : "Atomic Habits"},
{ ID : 2, Title : "Investor"},
{ ID : 3, Title : "Dopamine Detox"}]

const IdBook2 = books.find(n => n.ID ===2);
console.log(IdBook2);

const array = [1,3,5];
const evenno = array.find(n => n%2 ===0);
console.log(evenno);
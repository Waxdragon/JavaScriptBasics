const numbers = [1, 2, 3, 4]; 
// curr = 1, acc = 0 => 1
// curr = 2, acc = 1 => 3
// curr = 3, acc = 3 => 6
// curr = 4, acc = 6 => 10
const sum = numbers.reduce((curr, acc) => curr * acc, 1);
console.log(sum); 

const players = [
  { name: "Garnacho", goals: 8 },
  { name: "Rashford", goals: 11 },
  { name: "Casemiro", goals: 3 }
];
const totalGoals = players.reduce((sum, player) =>  sum + player.goals, 0);
console.log(totalGoals); 

const carts = [
  { item: "Boots", price: 3000 },
  { item: "Jersey", price: 2000 },
  { item: "Socks", price: 500 }
];
const total = carts.reduce((sum,product) =>  sum + product.price , 0); 
console.log(total);


const students = [
  { Name: "Alice", Scores: [90, 85, 87] },
  { Name: "Garnacho", Scores: [56, 66, 77] },
  { Name: "Rashford", Scores: [88, 100, 90] },
  { Name: "Calvert", Scores: [40, 50, 40] }
];
const totals = students.map(student => {
  const total = student.Scores.reduce((sum, score) => sum + score, 0);
  return { Name: student.Name, Total: total };
});
console.table(totals);

const students1 = [
  { Name: "Alice", Scores: [90, 85, 87] },
  { Name: "Garnacho", Scores: [56, 66, 77] },
  { Name: "Rashford", Scores: [88, 100, 90] },
  { Name: "Calvert", Scores: [40, 50, 40] }
];
const getTotal = (Score) => Score.reduce((acc, curr) => acc + curr, 0);
const studresult = students1.map((n) => ({
  Name: n.Name,
  Total: getTotal(n.Scores)
}));
console.log(studresult);
console.table(studresult);


const obj = { Name : "John", Score : [50,70,80]};
const sumScore = obj.Score.reduce((curr,acc) => curr + acc,0);
console.log(sumScore);

// adding (even) squared numbers from 1 to 6
const nums = [1,2,3,4,5,6]
const evenNums = nums.filter(n => n%2 === 0).reduce((numbers,acc) => numbers + acc,0);
console.log(evenNums);


// adding (odd) squared numbers from 1 to 6
const evenNumber = nums.map(n => n**2).reduce((acc, curr) => {
  return curr % 2 !== 0 ? acc + curr : acc;
}, 0);
console.log(evenNumber); 
// curr = 1 , acc = 0 , res = 1
// curr = 2, acc = 1 , res = 1
// curr = 3, acc = 1, res = 4
// curr = 4, acc = 4, res = 4
// curr = 5, acc = 4, res = 9
// curr = 6,acc = 9, res = 9


// adding squared numbers from 1 to 6
const evenNumber1 = nums.map(n => n**2).reduce((acc, curr) =>  acc + curr , 0);
console.log(evenNumber1);


const nums = [100, 25, 2];
nums.sort((a, b) => a - b);
console.log(nums); 

nums.sort((a, b) => b - a);
console.log(nums); 

const names = ["Zidane", "Messi", "Beckham", "Ronaldo"];
names.sort(); 
console.log(names); 

const players = [
  { name: "Garnacho", goals: 9 },
  { name: "Rashford", goals: 4 },
  { name: "Bruno", goals: 7 }
];
players.sort((a, b) => a.goals - b.goals);
console.log(players);

const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // in default it gives in alphabetical order

const nums1 = [10, 5, 20, 1];
nums1.sort();
console.log(nums1); 

const players1 = [
  { name: 'Garnacho', age: 20 },
  { name: 'Martinez', age: 26 },
  { name: 'Rashford', age: 26 },
  { name: 'Mainoo', age: 19 },
];

players.sort((a, b) => a.age - b.age);
console.log(players1);
players.sort((a,b) => a.name - b.name);
console.log(players1);
players1.sort((a, b) => a.name.localeCompare(b.name));
console.log(players1);


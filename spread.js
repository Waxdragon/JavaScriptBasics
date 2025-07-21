const nums = [1, 2, 3];
const copy = [...nums];
console.log(copy); 
// spread opertaor copies the whole elements into the new array without disturbing the original one

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // merging of arrays

const original = [10, 20];
const updated = [5, ...original, 30];
console.log(updated); // adding elements spread operators

const player = { name: "Bruno", age: 29 };
const copied = { ...player };
console.log(copied); // spread using objects

const base = { name: "Garnacho" };
const details = { age: 20, position: "Winger" };
const combined = { ...base, ...details };
console.log(combined);
// merging of objects

const obj1 = { name: "Rashford", age: 27 };
const obj2 = { age: 28 };
const updated1 = { ...obj1, ...obj2 };
console.log(updated1); // updation of objects using spread


const nums1 = [1, 2, 3];
console.log(...nums1); 

function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 3)); 
// function items into an array and then reducing it

const items = ["Pen", "Pencil", "Book"];
const stationary = [...items];
console.log(stationary)

const a = [1, 2];
const b = [3, 4];
const c = [...a,...b];
console.log(c);

const players = ["Bruno", "Rashford"];
const unitedPlayers = [...players, "Hojlund"]
console.log(unitedPlayers);

const objA = { club: "Man Utd" };
const objB = { country: "England" };
const objC = { ...objA,...objB};
console.log(objC);

const product = { name: "Ball", price: 50 };
const newProduct = {price : 40};
const newPrice = {...product,...newProduct};
console.log(newPrice);

const word = "Goal";
const chars = [...word];
console.log(chars);

const numbers = [5, 10, 2, 22];
function addNumbers(...addNumbers) {
    return addNumbers.reduce((a,b) => a + b,0);
}
console.log(addNumbers(1,2,3));

const numbers2 = [5, 10, 2, 22];
const max = Math.max(...numbers2);
console.log(max);

const numbers3 = [3,4,5,6,7,8,8,9,9,9,9]
const newNumbers3 = [...numbers3,23];
console.log(newNumbers3);


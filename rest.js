function sum(...nums) {
  console.log(nums); // an array
}
sum(1, 2, 3, 4); 

function greet(first, ...others) {
  console.log(first);     
  console.log(others);    
}
greet("Hello", "Hi", "Hola", "Salut");

const arr = [10, 20, 30, 40];
const [a, ...rest] = arr;
console.log(a);    
console.log(rest); 

const player = { names: "Bruno", age: 29, club: "Man Utd" };
const { names, ...others } = player;
console.log(names);  
console.log(others); 


function multiplyAll(...args){
    return args.reduce((a,b) => a*b,1)
};
console.log(multiplyAll(2, 3, 4));

const numbers = [10, 20, 30, 40];
const [a1,...others1] = numbers;
console.log(a1);
console.log(others1);

const player1 = {
  names1: "Casemiro",
  club: "Man Utd",
  country: "Brazil"
};
const { names1, ...others2} = player1
console.log(names1);
console.log(others2);

function listFriends(first, ...others) {
  console.log("Main:", first);
  console.log("Others:", others.join(", "));
}
console.log(listFriends("Garnacho", "Rashford", "Martinez"));

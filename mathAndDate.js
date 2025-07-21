
let now = new Date();

console.log(now.toDateString());      // "Wed Jun 11 2025"
console.log(now.getFullYear());       // 2025
console.log(now.getMonth());          // 5 (June, since months are 0-based)
console.log(now.getDate());           // 11
console.log(now.getDay());            // 3 (Wednesday)
console.log(now.getHours());          // e.g., 21
console.log(now.getMinutes());        // e.g., 05

console.log(Math.max(10, 20, 30));   // 30
console.log(Math.min(10, 20, 30));   // 10
console.log(Math.floor(4.9));        // 4
console.log(Math.ceil(4.1));         // 5
console.log(Math.round(4.5));        // 5
console.log(Math.random());          // 0.56789 (random number)
console.table(students);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); 



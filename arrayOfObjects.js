
 const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "C" }
];
console.log(students);
console.log(students[0].age);
console.log(students[2].name);

for (let i = 0; students.length > i; i++ ){
    console.log(students[i].name)
};
const number1 = [1,2,3,4];
const z = number1.map(num => num*2);
console.log(z);

const nameq = ["rashford", "garnacho", "onana"];
const goal = nameq.map(num => num.toUpperCase());
console.log(goal);

// power of the numbere
const number11 = [1,2,3,4];
const z1 = number11.map(num => num**2);
console.log(z1);

const nameq2 = ["rashford", "garnacho", "onana"];
const goal2 = nameq2.map(num => "Mr." + num);
console.log(goal2);

const players5 = [
  { name: "Garnacho", goals: 7 },
  { name: "Rashford", goals: 11 }
];
const z2 = players5.map(player => player.name);
console.log(z2);

const players55 = [
  { name: "Garnacho", goals: 7 },
  { name: "Rashford", goals: 11 }
];
const z22 = players55.map(player => player.goals);
console.log(z22);
const z23 = players55.map(players5 => `${players5.name} scored ${players5.goals} goals`);
console.log(z23);

const f = ["apple", "banana", "orange"];
// expected output = [0.apple,1.banana,2.orange]
const output = f.map((fruit, index) => index +"."+ fruit);
console.log(output);

const fr = ["apple","banana","orange"];
// expected output = [1.apple,2.banana,3.orange]
const result = fr.map((fruit,index) => index+1 + "."+fruit);
console.log(result);

const numbers = [2,4,6,8,10]
// expected output = [0,4,12,24,40]
const result1 = numbers.map((n,index) => {
  return index * n;
});
console.log(result1);

const students = [
  { name: "Aditya", age : 33 },
  { name: "Ram", age : 49 },
  { name: "Raj", age : 22 }
];

const k = students.map((student,index,array) => ({
  id:index+1,
  // name: n.name,
  ...student,
       array,
  // age : n.age,
}))
console.table(k);

const numbers2 = [1,2,3,4,5,6,7,8,9,10]
const newresult = numbers2.map((n,index,arr) => ({
   element : n+2,
   index : index+2,
   arr,

}))

console.table(newresult);
console.log(newresult);

const vegetables = ["brinjal", "onion", "potato"];

const vegresult = vegetables.map((n) => ({
  Vegetables: n,
  Price: 20,
}));

console.table(vegresult);
console.log(vegresult);

const students2 =[
{Name : "Alice", Scores : [90,85,87]},
{Name : "Garnacho", Scores : [56,66,77]},
{Name : "Rashford", Scores : [88,100,90]},
{Name : "Calvert", Scores : [40,50,40]}
];
const getTotal = (Score) => Score[0] + Score[1] + Score[2];
const studresult = students2.map((n) => ({
  Name : n.Name,
  // Total : n.Scores[0] + n.Scores[1] + n.Scores[2],
  Total : getTotal(n.Scores)
}))
console.log(studresult);
console.table(studresult);

const data = [
  {Name : "Rahul", Age : 22}, 
  {Name : "Shreyas", Age : 46},
  {Name : "Issa", Age : 55},
  {Name : "Watkins",Age : 33}];

  const dataresult = data.map((data) => ({
    [data.Name] : data.Age,
  }))

  const dataresult2 = data.map((data,index) => ({
    [index] : data.Name,
  }))
console.log(dataresult);
console.log(dataresult2);

const data1 = [
  {Name : "Rahul", Age : 22,Gender :"Male"}, 
  {Name : "Shreyas", Age : 46, Gender : "Male"},
  {Name : "Issa", Age : 55, Gender : "Female"},
  {Name : "Watkins",Age : 33, Gender : "Male"}];

  const res = data1.map(({Name,Gender}) => ({
    Name : Name,
    Gender : Gender,
    Length : Name.length
    

  }))
console.table(res)


const items = [
  { name: "Apple", units: 2 },
  { name: "Banana", units: 5 }
];

const rates = {
  Apple: 10,
  Banana: 6
};
const result4 = items.map(item => ({
  name: item.name,
  units: item.units,
  rate: rates[item.name],
  cost: item.units * rates[item.name]
}));

console.table(result4);

const itemsWithPrice = items.map(item => {
const rate = rates[item.name];
const amount = item.units*rate;

 return {
  ...item,
  Rate : rate,
  Amount : amount

 }

});
console.table(itemsWithPrice)




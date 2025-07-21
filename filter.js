const numbers = [10, 25, 30, 45];
const above30 = numbers.filter(n => n > 30);
console.log(above30); 

const x = [1, 2, 3, 4, 5, 6]
const even1 = x.filter(n => n%2 == 0 );
console.log(even1);

const y = [15, 22, 17, 30]
const s = y.filter(n => n>18);
console.log(s);

const t = [20, 40, 50, 30]
const f = t.filter(n => n>35);
console.log(f);

const v = [1, 0, "", "Hello", null, 5]
const k = v.filter(n => Boolean(n));
console.log(k);

const players33 = [
  { name: "Garnacho", goals: 8 },
  { name: "Rashford", goals: 11 },
  { name: "Casemiro", goals: 3 }
];
const l = players33.filter(n => n.goals > 5).map(n=>n.goals);
console.log(l);

const products = [
  { name: "Boots", price: 3000 },
  { name: "Jersey", price: 1500 },
  { name: "Gloves", price: 500 }
];
const g = products.filter(n => n.price>1000);
console.log(g);

const users = [
  { name: "Prashanth", active: true },
  { name: "Arjun", active: false },
  { name: "Kiran", active: true }
];
const h = users.filter(n => Boolean(n.active) == true)
console.log(h);

const mix = [1, "goal", true, "kick", null]
const c = mix.filter(n => typeof n == "string");
console.log(c);

const matches = [
  { team: "Man Utd", year: 2022 },
  { team: "Arsenal", year: 2021 },
  { team: "Liverpool", year: 2022 }
];

const u = matches.filter(n => n.year == 2022);
console.log(u);

const p = ["kick", "goalkeeper", "pass", "formation"]
const j = p.filter(n => n.length>5);
console.log(j);

const items = ["Apple", "Banana", "Mango", "Grapes"];
const keyword = "an";

const matched = items.filter(item => item.toLowerCase().includes(keyword));
console.log(matched); 

const students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 45 },
  { name: "C", marks: 75 }
];

const good = students.filter(s => s.marks > 60 && s.name !== "C");
console.log(good); 

const words = ["Ball", "Bat", "Apple", "Boat"];
const bWords = words.filter(w => w.startsWith("B"));
console.log(bWords); 


let array =[1,2,3,4,5,6,7,8,9,10];
const evenNumber = array.filter(n => n%2 ==0 );
console.log(evenNumber);

const array1=[1,2,3,4,5]
const answer = array1.map(n => n*2).filter(n => n>5);
console.log(answer);


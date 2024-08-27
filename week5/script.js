// console.log("welcome to the class");
// // this is a comment
// let myName = "alice";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);
// console.log(`${myName} lives in ${myCity}`);

// let count = 10;
// console.log(count);

// let Isitmorningclass = true;
// let IsItAfternoonClass = false;

// let myStudentRecord = {
//   name: "Michelle",
//   id: 1234,
//   class: "OART2301",
//   isItscience: false,
//   isitdesign: true,
// };

// console.log("Hello everyone, my name is", myStudentRecord.name);
// console.log("my id is", myStudentRecord.id);
// console.log("my class is", myStudentRecord.class);
// console.log("are you science student?", myStudentRecord.isItscience);

// const numberArray = [2, 4, 6, 8];
// console.log(numberArray[2]);
// myStudentRecord.isItscience = true;
// if (myStudentRecord.isItscience) {
//   console.log("sorry you're in the wrong class");
// } else {
//   console.log("Welcome to OART1013");
// }

// let myScore = 60;
// if (myScore >= 90) {
//   console.log("You scored a HD");
// } else if (myScore < 90 && myScore >= 70) {
//   console.log("You missed HD");
// } else if (myScore < 70 && myScore >= 50) {
//   console.log("You score a C");
// } else {
//   console.log("You score a P");
// }

// == equal to
// === equal value and equal type
// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// logical operator
//&& and
// || or
// ! not

// console.log("Hello Martha");
// console.log("Hello Maria");
// console.log("Hello Mary");
// console.log("Hello Bathsheba");
// console.log("Hello Thomas");

const names = ["Martha", "Maria", "Mary", "Bathsheba", "Thomas"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(total);
let sum = 0;
for (let i = 0; i < 4; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log(sum);

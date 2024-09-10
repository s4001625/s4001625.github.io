function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(temp.value);
  if (temp.value >= 40) {
    body.style.backgroundColor = "red";
    outer.style.backgroundColor = "blue";
    console.log("it is burning hot");
  } else if (temp.value < 40 && temp.value >= 30) {
    body.style.backgroundColor = "limegreen";
    outer.style.backgroundColor = "peach";
    console.log("it is sunny and warm");
  } else if (temp.value < 30 && temp.value >= 15) {
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "purple";
    console.log("it is pleasant weather");
  } else {
    body.style.backgroundColor = "grey";
    outer.style.backgroundColor = "purple";
    console.log("it is freezing");
  }
}

variables;
// const - use it when the value does not change
// let - use it when we want to change the value

// number let a = 10
// string let b = "Rohit" 'abcd'`pqrs`
// boolean let c = trus / false
// null let d = null;
// undefined let e;
// object let c = {a: 10, b:"Rohit"};

// arrays
// let arr = [1,3,5,7,9];
// it starts with 0

// if (condition) {execute this if true}
// else {execute this when its false}

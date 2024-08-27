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
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "peach";
    console.log("it is a pleasant weather");
  } else {
    body.style.backgroundColor = "grey";
    outer.style.backgroundColor = "purple";
    console.log("it is freezing");
  }
}

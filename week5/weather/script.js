function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  console.log(temp.value);
  if (temp.value >= 40) {
    body.style.backgroundColor = "red";
    console.log("it is burning hot");
  } else if (temp.value < 40 && temp.value >= 30) {
    body.style.backgroundColor = "aqua";
    console.log("it is a pleasant weather");
  } else {
    body.style.backgroundColor = "grey";
    console.log("it is freezing");
  }
}

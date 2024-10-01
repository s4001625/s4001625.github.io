// first let us fetch the ball that we wsnt to interact

const ball = document.querySelector(".ball");
console.log(ball);
// -------------------------------------------------

// lets get access to the outer box border
const outer = document.querySelector(".outer");
console.log(outer);
// -------------------------------------------------

// -------------------------------------------------
// let us work on the translate or move logic
// first we need the button
const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 0;
let outerWidth = outer.clientWidth / 2 - 30;
function moveBall() {
  if (distance < outerWidth) {
    transformBall();
    // ball.style.transform = `translateX(${distance}px)`;
    distance += 30;
  }
}
// negative value moves it to the left `translateX(-${distance}px)`, positive to the right. Both x and y value move diagonally.
// -------------------------------------------------

// -------------------------------------------------
// let us work on the rotate logic
// first we need the rotate button
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let rDeg = 0;

function rotateBall() {
  transformBall();
  //   ball.style.transform = `rotate(${rDeg}deg)`;
  rDeg += 45;
}
// -------------------------------------------------

// -------------------------------------------------
// let us work on the scale logic
// first we need the scale button
const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let scaleVale = 0.9;

function scaleBall() {
  if (scaleVale > 0.2) {
    transformBall();
    // ball.style.transform = `scale(${scaleVale})`;
    scaleVale -= 0.1;
  }
}
// -------------------------------------------------

function transformBall() {
  ball.style.transform = `translateX(${distance}px) rotate(${rDeg}deg) scale(${scaleVale})`;
}

// -------------------------------------------------
// let us work on the reset logic
// first we need the reset button
const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);

function resetBall() {
  scaleVale = 0.9;
  distance = 0;
  rDeg = 0;
  transformBall();
}
// -------------------------------------------------

const startButton = document.querySelector("#start-button");
console.log(startButton);

startButton.addEventListener("click", startGame);

function startGame() {
  window.location.href = "play.html";
}

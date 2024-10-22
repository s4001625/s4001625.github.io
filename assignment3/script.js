// const paperClose = document.querySelector("#paper-close");
// console.log(paperClose);
const paperOpen = document.querySelector("#paper-open");
console.log(paperOpen);
// const plastiClose = document.querySelector("#plastic-close");
// console.log(plastiClose);
const plasticOpen = document.querySelector("#plastic-open");
console.log(plasticOpen);
// const paperBag = document.querySelector("#paper-bag");
// console.log(paperBag);
// const crumPaper1 = document.querySelector("#crump-paper1");
// console.log(crumPaper1);
// const crumPaper2 = document.querySelector("#crump-paper2");
// console.log(crumPaper2);
// const plastiCup = document.querySelector("#plastic-cup");
// console.log(plastiCup);
// const plasticBag = document.querySelector("#plastic-bag");
// console.log(plasticBag);
// const plasticBottle = document.querySelector("#plastic-bottle");
// console.log(plasticBottle);

let draggedElement = null;
const dragItems = document.querySelectorAll(".draggable");

for (let i = 0; i < dragItems.length; i++) {
  dragItems[i].addEventListener("dragstart", function () {
    draggedElement = dragItems[i];
    // dragItems[i].style.display = "none";
  });
  dragItems[i].addEventListener("dragenter", function (event) {
    // dragItems[i].style.display = "none";
    console.log(event.target);
  });
}

paperOpen.addEventListener("dragover", endDrag);
function endDrag(event) {
  const category = event.getAttribute("data-id");
  console.log(category);
  event.preventDefault();
  //   event.style.display = "none";
}

paperOpen.addEventListener("drop", handlePaperDrop);

plasticOpen.addEventListener("dragover", endDrag);
function endDrag() {
  event.preventDefault();
}

plasticOpen.addEventListener("drop", handlePlasticDrop);

function handlePaperDrop() {
  const category = draggedElement.getAttribute("data-id");
  console.log(category);
  if (draggedElement && category === "paper") {
    draggedElement.style.display = "none";
    draggedElement = null;
  } else {
    // alert("wrong bin");
    paperOpen.classList.add("binshake");
  }
}

function handlePlasticDrop() {
  const category = draggedElement.getAttribute("data-id");
  console.log(category);
  if (draggedElement && category === "plastic") {
    draggedElement.style.display = "none";
    draggedElement = null;
  } else {
    alert("wrong bin");
  }
}

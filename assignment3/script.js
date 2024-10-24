const paperOpen = document.querySelector("#paper-open");
console.log(paperOpen);
const plasticOpen = document.querySelector("#plastic-open");
console.log(plasticOpen);

// it selects all element / object to make it draggable, since I wanted each object able to be drag and drop.
let draggedElement = null;
const dragItems = document.querySelectorAll(".draggable");

for (let i = 0; i < dragItems.length; i++) {
  dragItems[i].addEventListener("dragstart", function () {
    draggedElement = dragItems[i];
    paperOpen.classList.remove("binshake");
    plasticOpen.classList.remove("binshake");
  });
  dragItems[i].addEventListener("dragenter", function (event) {
    console.log(event.target);
  });
}

paperOpen.addEventListener("dragover", endDrag);
function endDrag(event) {
  const category = event.getAttribute("data-id");
  console.log(category);
  event.preventDefault();
}

paperOpen.addEventListener("drop", handlePaperDrop);

plasticOpen.addEventListener("dragover", endDrag);
function endDrag() {
  event.preventDefault();
}

// these are for the bins, commanding the bin to receive only the category assigned to each one and if other category tried to be drop,it will shake to show that it's the wrong bin.
plasticOpen.addEventListener("drop", handlePlasticDrop);

function handlePaperDrop() {
  const category = draggedElement.getAttribute("data-id");
  console.log(category);
  if (draggedElement && category === "paper") {
    draggedElement.style.display = "none";
    draggedElement = null;
  } else {
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
    plasticOpen.classList.add("binshake");
  }
}

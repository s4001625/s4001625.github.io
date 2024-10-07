// this is a hover example
const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

// adding show class containing display:block it will make the div visible
function showMoreInfo() {
  moreInfo.classList.add("show");
}

// removing show class containing display:block it will make the div visible as it will revert back to display:none
function hideMoreInfo() {
  moreInfo.classList.remove("show");
}
// ---------------------------------------------------------------------------------------------

// let us work on the drop down example
const profileButton = document.querySelector("#profile-button");
console.log(profileButton);
profileButton.addEventListener("click", toggleMenu);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

function toggleMenu() {
  profileContent.classList.toggle("show");
}
// -----------------------------------------------------------------------

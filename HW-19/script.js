const leftClickNumber = document.querySelectorAll(".click-counter>ul>li")[1];
const rightClickNumber = document.querySelectorAll(".click-counter>ul>li")[3];
const switchableButton = document.querySelectorAll("button")[1];
const embarrassedSquare = document.querySelector(".embarrassed");
function countClicks() {
  leftClickNumber.innerHTML++;
}
function countRightClicks() {
  rightClickNumber.innerHTML++;
}
function switchButton() {
  switchableButton.toggleAttribute("disabled");
}
function changeBackgroundColor() {
  embarrassedSquare.classList.toggle("red");
}
document.addEventListener("click", (event) => {
  countClicks();
  if (event.target.classList.contains("switcher")) {
    switchButton();
  }
});
document.addEventListener("contextmenu", countRightClicks);
embarrassedSquare.addEventListener("mouseover", changeBackgroundColor);
embarrassedSquare.addEventListener("mouseout", changeBackgroundColor);

const [decrement, increment] = document.querySelectorAll(".counter__button");
let currentCounterValue = document.querySelector(".counter__display");
function addOneToCounter() {
  if (+currentCounterValue.innerHTML !== 1000) {
    currentCounterValue.innerHTML++;
  }
}
function takeOneFromCounter() {
  if (+currentCounterValue.innerHTML !== 0) {
    currentCounterValue.innerHTML--;
  }
}
decrement.onclick = takeOneFromCounter;
increment.onclick = addOneToCounter;

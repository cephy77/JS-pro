const square = document.querySelector(".square");
function centerSquare() {
  square.style.cssText = `left: ${
    document.documentElement.scrollWidth / 2 - square.offsetWidth / 2
  }px;top:${
    document.documentElement.scrollHeight / 2 - square.offsetWidth / 2
  }px;`;
}
centerSquare();

square.addEventListener("dblclick", centerSquare);
square.addEventListener("pointerdown", (event) => {
  function preventDefault(event) {
    event.preventDefault();
  }
  window.addEventListener("touchmove", preventDefault, { passive: false });
  square.classList.add("hold");
  let shiftX = event.clientX - square.getBoundingClientRect().left;
  let shiftY = event.clientY - square.getBoundingClientRect().top;
  function moveSquare(pageX, pageY) {
    function calcBorders(vector) {
      let page, shift, length;
      if (vector === "x") {
        page = pageX;
        shift = shiftX;
        length = window.innerWidth;
      } else {
        page = pageY;
        shift = shiftY;
        length = window.innerHeight;
      }
      length -= square.offsetWidth;
      if (page - shift < 0) {
        return "0px";
      } else if (page - shift > length) {
        return `${length}px`;
      } else {
        return `${page - shift}px`;
      }
    }
    let left = calcBorders("x");
    let right = calcBorders("y");
    square.style.left = left;
    square.style.top = right;
  }
  function onPointerMove(event) {
    moveSquare(event.pageX, event.pageY);
  }
  document.addEventListener("pointermove", onPointerMove);
  function unsubscribe() {
    document.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("touchmove", preventDefault);
    square.classList.remove("hold");
    square.removeEventListener("pointerup", unsubscribe);
  }
  square.addEventListener("pointerup", unsubscribe);
});

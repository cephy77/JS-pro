const box = document.querySelector(".box");
function randColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}
box.addEventListener("click", () => {
  box.style.cssText = `background-color: ${randColor()}`;
});

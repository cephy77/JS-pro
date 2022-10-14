function displayInputSting(string) {
  const wrapper = document.querySelector(".main");
  function randColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  }
  if (typeof string != "string") {
    return;
  } else {
    const message = document.createElement("div");
    message.innerHTML = string;
    message.className = "message";
    btn.classList.toggle("none");
    wrapper.prepend(message);
    for (let i = 1; i < 3; i++) {
      setTimeout(() => {
        message.style.cssText = `color: ${randColor()}`;
      }, i * 10000);
    }
    setTimeout(() => {
      message.remove();
      btn.classList.toggle("none");
    }, 30000);
  }
}
const btn = document.querySelector(".btn");
btn.onclick = () => {
  displayInputSting(prompt("Enter anything", "Something"));
};

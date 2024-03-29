const switcher = document.querySelector("input[type=radio]");
const form = document.querySelector("form");
function drawElement(type, element) {
  if (!type === "local") {
    type = "session";
  }
  const place = document.querySelector(`.${type}-block`);
  place.append(element);
}
function createRecord(type, key, value) {
  let className = "session-item";
  if (type === "local") {
    className = "local-item";
  }
  let element = document.createElement("div");
  element.className = `${className} item`;
  element.innerHTML = `<button>x</button>
  <div class="storage-record">
  <div class="storage-key">${key}</div>
  <div class="storage-value">${value}</div></div>`;
  drawElement(type, element);
}
function checkStorage(type) {
  let storage = sessionStorage;

  if (type === "local") {
    storage = localStorage;
  }
  for (let key in storage) {
    if (!storage.hasOwnProperty(key)) {
      continue;
    }
    createRecord(type, key, storage.getItem(key));
  }
}
checkStorage("local");
checkStorage("session");
form.onsubmit = () => {
  const key = form.keyInp.value;
  const value = form.valueInp.value;
  let type = "session";
  if (switcher.checked) {
    localStorage.setItem(key, value);
    type = "local";
  } else {
    sessionStorage.setItem(key, value);
  }
  createRecord(type, key, value);
};

const recordBoard = document.querySelector(".recordboard");
recordBoard.onclick = (event) => {
  if (event.target.localName === "button") {
    const key = event.target.nextElementSibling.childNodes[1].innerText;
    const recordElement = event.target.parentNode;
    let storage = sessionStorage;
    if (recordElement.classList[0] === "local-item") {
      storage = localStorage;
    }
    storage.removeItem(key);
    recordElement.remove();
  }
};

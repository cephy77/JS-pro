const form = document.forms[0];
const result = document.querySelector(".result");
function showDiv() {
  if (!result.innerText && result.classList.contains("none")) {
    return;
  }
  if (result.innerText && !result.classList.contains("none")) {
    return;
  }
  result.classList.toggle("none");
}

form.onsubmit = () => {
  result.innerText = form.string.value;
  form.string.value = "";
  showDiv();
  return false;
};
result.oncopy = () => {
  navigator.clipboard.writeText(`test ${result.innerText}`);
};

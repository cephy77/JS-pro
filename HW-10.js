// Task 1
function isItToday(ms) {
  const givenDate = new Date(ms);
  const today = new Date();
  if (givenDate.getDate() === today.getDate()) {
    return true;
  }
  return false;
}
console.log(isItToday(1));

// Task 2
function formatingDate(ms) {
  const formatDate = new Date(ms);
  return formatDate.toLocaleString("de-AT");
}
console.log(formatingDate(1));

// Task 3
function countTimeLapse(ms) {
  const currentMs = new Date();
  const givenMs = new Date(ms);
  const timeLapse = currentMs - givenMs;
  return timeLapse < 0 ? -timeLapse : timeLapse;
}
console.log(countTimeLapse(1));

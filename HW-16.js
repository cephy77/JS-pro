// Task 1
function* generateRandNumber(min, max, iter) {
  function getRandNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for (let i = 0; i < +iter; i++) {
    yield getRandNumber(min, max);
  }
}
const tenRandNumArr = [...generateRandNumber(1, 1000, 10)];
console.log(tenRandNumArr);

// Task 2
// Here I simulated checking previous data, then fetching new data. Yes, looks kinda weird
function filler(status, checker, phrase) {
  if (status === checker) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          const status = phrase;
          console.log(status);
          resolve(status);
        },
        1000,
        phrase
      );
    });
  }
}
async function getUp() {
  return filler("I get up", "I get up", "I get up");
}
async function brushTeeth(status) {
  return filler(status, "I get up", "I brushed my teeth");
}
async function doBreakfast(status) {
  return filler(status, "I brushed my teeth", "I had nice breakfast");
}

async function dailyroutine() {
  const step1 = await getUp();
  const step2 = await brushTeeth(step1);
  const step3 = await doBreakfast(step2);
}
dailyroutine();

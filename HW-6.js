// Task 1
const sword = `O--|7777777`;
function showSword() {
  console.log(sword);
}
showSword();

// Task 2
const rabbitColor = "Grey";
function winter() {
  const rabbitColor = "White";
  console.log(rabbitColor);
}
winter();
//The value of rabbitColor in console would be the same as inside function
//but if concole.log was written after function - the walue would be the one that were written before function

// Task 3
//variable a = 10 in concole because:
//function "foo" didnt found variable in inner lexical environment,
//it get further and found "a" in outer lexical environment where varible was declared.
//if there was no daclered variable there, "foo" would find "a" inside function "bar"

// Task 4
// variable a = 20 in concole because:
//function "foo" found variable "a" in inner lexical environment then stopped search and logged out "a"
//if inside "foo" was no "a", it would find "a" in outer lex.env. that is equal 30.
//If function was called before a = 30, "foo" would find "a" where "a" was declared.

// Task 5
for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// Task 6
function countNinePlusTen() {
  let counter;
  function doCount(num = 0) {
    counter = num;
    return counter;
  }
  doCount(21);
  return { counter, doCount };
}
const tsk6 = countNinePlusTen();
console.log(tsk6.counter);
console.log(tsk6.doCount(42));

//Task 1
let greeting = "Hello world";
const splittedGreeting = greeting.split(" ");

splittedGreeting[1] =
  splittedGreeting[1][0].toUpperCase() + splittedGreeting[1].substring(1);

greeting = splittedGreeting.join(" ");
const exclamationMark = "!";
greeting = greeting.concat(exclamationMark);
//or just simply add in line 8: + "!"

//Task 2
const stringForLogging = "a123";
let eachCharDataType = "";

for (let i = 0; i < stringForLogging.length; i++) {
  if (isNaN(+stringForLogging[i]) || stringForLogging[i] == " ") {
    eachCharDataType += typeof stringForLogging[i];
  } else {
    eachCharDataType += typeof +stringForLogging[i];
  }
  if (i < stringForLogging.length - 1) {
    eachCharDataType += ", ";
  } else {
    eachCharDataType += ".";
  }
}
// if loop in task 2 should be written with "while", result shown bellow
let i = 0;
eachCharDataType = "";

while (i < stringForLogging.length) {
  if (isNaN(+stringForLogging[i]) || stringForLogging[i] == " ") {
    eachCharDataType += typeof stringForLogging[i];
  } else {
    eachCharDataType += typeof +stringForLogging[i];
  }
  if (i < stringForLogging.length - 1) {
    eachCharDataType += ", ";
  } else {
    eachCharDataType += ".";
  }
  i++;
}
console.log(eachCharDataType);

//Task 3
for (let i = 13; i > 2; i--) {
  if (i % 2) {
    console.log("odd");
  } else {
    console.log("even");
  }
}

let I = 13;

while (I > 2) {
  if (I % 2) {
    console.log("odd");
  } else {
    console.log("even");
  }
  I--;
}

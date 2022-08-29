// Task 1
//Console will show:
// 1.Hi I am Bob. "this" will found variable "name" in "user" object.
// 2.Hi I am undefined. After reassigning function with "this" to the new variable
// "greetingsFunc". In that case "this" doesnt find object key "name" in new function then goes
// to window, where "name" is undefined
// 3.Hi I am Jane. After "greetingsFunc" was put inside "user2" as a sayHi value.
// "this" get "name" from "user2" object

// Task 2
class Pet {
  constructor(name, kind, color) {
    this.name = name;
    this.kind = kind;
    this.color = color;
  }
}
const dobbyTheElf = new Pet("Dobby", "Elf", "Grey");
const jakeTheDog = new Pet("Jake", "Dog", "Yellow");
console.log(dobbyTheElf);
console.log(jakeTheDog);

// Task 3
const numberForTask3 = "152092";
function countSumOfEachDigit(number) {
  let counter = 0;
  let sum = 0;
  function recur() {
    if (counter < number.length) {
      sum += +number[counter];
      counter++;
      recur();
    }
    return sum;
  }
  return recur();
}
console.log(countSumOfEachDigit(numberForTask3));

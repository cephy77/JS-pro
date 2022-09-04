// Task 1
const numbersArray = [1, 1, 2, 3, 4, 5, 5, 5, 6];
const uniqueNumbersArray = [...new Set(numbersArray)];
console.log(uniqueNumbersArray);

// Task 2
const userBob = { name: "Bob" };
const userJane = { name: "Jane" };
const greetUser = new Map([
  [userBob, `Hello ${userBob.name} nice to see you`],
  [userJane, `How your kids doing ${userJane.name}?`],
]);
console.log(greetUser.get(userBob));
console.log(greetUser.get(userJane));

// Task 3
const someObj = {
  model: "a-10 thunderbolt",
  sound: "BBBRRRRRTTTTTTT",
};
const someMap = new Map([
  ["name", "Batman"],
  ["superpower", "money"],
  ["weakness", "inflation"],
]);
function transformObjMap(elem) {
  if (elem instanceof Map) {
    return Object.fromEntries(elem.entries());
  } else {
    return new Map(Object.entries(elem));
  }
}
const a10 = transformObjMap(someObj);
console.log(a10);
const bruceWayne = transformObjMap(someMap);
console.log(bruceWayne);

// let str = "Hi";
// let str2 = str + " " + "Hello";
// console.log(str);
// console.log(`${str} Bob`);

// const strForLogging = "a123B";
// let result = "";
// for (let i = 0; i < strForLogging.length; i++) {
//   let currentSymbol = Number.parseInt(strForLogging[i]);
//   if (Number.isNaN(currentSymbol)) {
//     result += "string, ";
//   } else {
//     if (i === strForLogging.length - 1) {
//       result += "number.";
//     } else {
//       result += "number, ";
//     }
//   }
// }
// console.log(result);

// // ===
// // ==
// // '1' == 1
// let i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i < 3);

// {
//   i++;
//   console.log(i);
// }

// let numbersArr = [1, 2, 3];

// numbersArr.push(4);
// console.log(numbersArr);
// numbersArr.pop();
// console.log(numbersArr);

// numbersArr.unshift(0);
// console.log(numbersArr);
// numbersArr.shift();
// console.log(numbersArr);

// numbersArr.forEach(function (elem) {
//   console.log(elem);
// });

// function increment(param) {
//   console.log(param);
//   // return
//   return param + 1;
// }
// let incrementedValue = increment(1);
// console.log(incrementedValue);

// const incrementArrowFunc = (param1, param2 = 4) => {
//   return param1 + 1 + param2 + 2;
// };
// console.log(incrementArrowFunc(1));

// let arraySum = 0;

// const sumFunc = function (elem) {
//   console.log(elem);
//   arraySum += elem;
// };

// numbersArr.forEach(sumFunc);
// console.log(arraySum);

// [1, 2, 3].forEach(sumFunc);

// numbersArr
//   .map((numberElem, i, ourNumbersArray) => numberElem + 1)
//   .filter((elem) => elem % 2);
// console.log(numbersArr.map((numberElem) => numberElem + 1));
// console.log(numbersArr);

// const newArray = numbersArr.map((numberElem) => numberElem + 1);
// console.log(newArray);

// const oddNumbersArray = numbersArr.filter(function (elem) {
//   return elem % 2; // 0 1
// });
// console.log(oddNumbersArray);

// const usersArray = [
//   { name: "Bob", money: 100 },
//   { name: "Alice", money: 50 },
//   { name: "John", money: 200 },
//   { name: "Barby", money: 250 },
//   { name: "asd", money: 30 },
// ];

// const clubArray = usersArray.filter((user) => user.money < 100);
// console.log(clubArray);

// console.log(numbersArr.find((elem) => elem === 3));

// let currentNonSoRichUser = usersArray[0];
// const richMan = usersArray.find((user) => user.money > 500);
// console.log(richMan);

// const userWithCertainMoneyAmount = usersArray.findIndex(
//   (elem) => elem.money === 200
// );
// console.log(userWithCertainMoneyAmount);

// const isBobAtTheClub = usersArray.some((user) => user.name === "Bob");
// console.log(isBobAtTheClub);

// const allUsersHaveMoney = usersArray.every((user) => user.money);
// console.log(allUsersHaveMoney);

// console.log(usersArray.splice(0, 1));
// console.log(usersArray);
// const newUsersArray = usersArray.slice(0, 3);
// console.log(newUsersArray);
// console.log(usersArray);
// const bigParty = usersArray.concat(newUsersArray);
// console.log(bigParty);
// const numbersString = numbersArr.join();
// console.log(typeof numbersString);

// const matrix = ["Hello", ["1", "2", 3], 0];
// const unMatrix = matrix.flat();
// console.log(unMatrix);

// console.log(Array.isArray([]));
// console.log(Array.isArray(1));
// Array.isArray(usersArray) && usersArray.length;

// const sortedUsersArray = [10, 5, 1, 20].sort((user1, user2) => {
//   return user2 - user1;
// });

// console.log(sortedUsersArray);

// const reversedArr = usersArray.reverse();
// console.log(...reversedArr);

// console.log([1, 3, 4, ...[52, 51]]);

// // let a = ...usersArray;

// const sum = numbersArr.reduce((acc, curr) => {
//   return (acc += curr);
// }, "0");

// console.log(sum);

// const allMoney = usersArray.reduce((acc, curr) => {
//   return (acc += curr.money);
// }, 0);

// console.log(allMoney);

// const userBob = {
//   1: 1,
//   name: "Bob",
//   money: 100,
//   sayHi: function () {
//     console.log("Bob says hi");
//     return "I said hi in console";
//   },
// };
// const bobsProperty = "name";
// console.log(userBob.sayHi());
// console.log(userBob[bobsProperty]);

// const bobObjKeys = Object.keys(userBob);
// console.log(bobObjKeys);

// const bobObjValues = Object.values(userBob);
// console.log(bobObjValues);

// console.log(filteredUsersArray);

// Task 10
// const allUsersArray = usersArray.reduce((all, current) => {
//   if (current.friends.length != 0) {
//     current.friends.forEach((friend) => {

//         friendArr.push(friend.name);
//         all.push(friend);

//     });
//     delete current.friends;
//     all.push(current);
//   } else {
//     delete current.friends;
//     all.push(current);
//   }
//   return all;
// }, []);

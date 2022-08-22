// Task 1
function doFirstLetterCapital(string) {
  let stringArr = string.split(" ");
  return stringArr
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}
console.log(doFirstLetterCapital("hello world"));

// Task 2
function countStringLengthInArray(arr) {
  return arr.reduce((total, current) => {
    if (typeof current === "string" && current.length !== 0) {
      total.push(current.length);
    }
    return total;
  }, []);
}
const arrayforTask2 = [
  "hi",
  "",
  "wow",
  null,
  ["I am not a string you are looking for"],
  "I am",
  123,
];
console.log(countStringLengthInArray(arrayforTask2));

// Task 3
function countVowels(string) {
  const vowels = "AaEeIiOoUuYy".split("");
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}
console.log(countVowels("Hello world"));

// Task 4
function createUser(role, name) {
  return { role: role, name: name };
}
console.log(createUser("admin", "Bob"));
console.log(createUser("user", "Alice"));

// Task 5
function countStringLetters(string) {
  const splittedString = string.split("");
  const uniqueLetters = [...new Set(splittedString)];
  const letterCounter = uniqueLetters.reduce((acc, current) => {
    let counter = 0;
    splittedString.forEach((letter) => {
      if (current === letter) {
        counter++;
      }
    });
    acc += counter + current;
    return acc;
  }, "");
  return letterCounter;
}
console.log(countStringLetters("aabbbccccd"));

// Task 6
function countOddEven(arr) {
  let oddCounter = 0;
  let evenCounter = 0;
  arr.forEach((number) => {
    if (!Number.isNaN(number)) {
      number % 2 || number === 0 ? evenCounter++ : oddCounter++;
    }
  });
  return `There are ${oddCounter} odd numbers and ${evenCounter} even nubmers.`;
}
console.log(countOddEven([1, 2, 3, 4, NaN, 0, 5, 10]));

// Task 7
function convert(currency, ammount) {
  const currenciesObj = {
    US: 36.6,
    EU: 38.1,
    PL: 7.6,
  };
  const calculus = ammount / currenciesObj[currency];
  return Number.isNaN(calculus) ? "Can not convert that" : calculus.toFixed(2);
}
console.log(convert("US", 1000));

// Task 8
function doSpaceBetweenLetters(string) {
  return string.split(" ").join("").split("").join(" ");
}
console.log(doSpaceBetweenLetters("Hello world"));

// Task 9
function getHoursfromYears(years) {
  if (typeof years === "string") {
    years = years.match(/\d+/g)[0];
  }
  // 365.2425 average lenght of the year for the Gregorian calendar
  return (years * (365.2425 * 24)).toFixed();
}
console.log(getHoursfromYears("5 years"));

// Task 10
function trim(string, trimmedLength) {
  return `${string.substring(0, trimmedLength)}...`;
}
console.log(trim("hello world", 3));

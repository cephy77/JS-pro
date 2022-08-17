const usersArray = [
  {
    name: "John",
    balance: "2000$",
    friends: [
      {
        name: "Robert",
        balance: "1000$",
      },
      {
        name: "Kate",
        balance: "0$",
      },
    ],
  },
  {
    name: "Isaac",
    balance: "20000$",
    friends: [
      {
        name: "Bob",
        balance: "2000$",
      },
      {
        name: "Robert",
        balance: "150000$",
      },
    ],
  },
  {
    name: "Jane",
    balance: "200$",
    friends: [
      {
        name: "Kate",
        balance: "5000$",
      },
      {
        name: "Anne",
        balance: "1234$",
      },
      {
        name: "Bob",
        balance: "300$",
      },
    ],
  },
  {
    name: "Russell",
    balance: "100$",
    friends: [],
  },
];

// Task 1
let biggestBalance = 0;
let richestUserName;

usersArray.forEach((element) => {
  let userBalance = Number(element.balance.slice(0, -1));
  if (userBalance > biggestBalance) {
    biggestBalance = userBalance;
    richestUserName = element.name;
  }
});
// console.log(richestUserName);

// Task 2
const sortedUsersArray = Object.assign([], usersArray);
sortedUsersArray.sort((elem1, elem2) => {
  if (elem1.name > elem2.name) {
    return 1;
  } else if (elem1.name < elem2.name) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(sortedUsersArray);

// Task 3
let initialValue = 0;
const totalBalance = usersArray.reduce((total, current) => {
  return total + Number(current.balance.slice(0, -1));
}, initialValue);
// console.log(totalBalance);

// Task 4
const usersArrayWithoutRussell = Object.assign([], usersArray);
usersArrayWithoutRussell.pop(); //or if user "Russel" were not at the end of the array, solving shown in the next task

// Task 5
function findUserIndex(user) {
  return usersArray.findIndex((elem) => elem.name == user);
}

const usersArrayWithoutIsaac = Object.assign([], usersArray);
const isaacIndex = findUserIndex("Isaac");
usersArrayWithoutIsaac.splice(isaacIndex, 1);
// console.log(usersArrayWithoutIsaac);

// Task 6
const usersArrayWithHarry = Object.assign([], usersArray);
const johnIndex = findUserIndex("John");
usersArrayWithHarry.splice(johnIndex + 1, 0, {
  name: "Harry",
  balance: "0$",
  friends: [],
});
// console.log(usersArrayWithHarry);

// Task 7
const usersArrayWithConnor = Object.assign([], usersArray);
usersArrayWithConnor.push({ name: "Connor", balance: "0$", friends: [] });
// console.log(usersArrayWithConnor);

// Task 8

let friendArr = []; //tool to avoid repeating
const allUniqueUsersArray = usersArray.reduce((allUniqueUsers, currentUser) => {
  if (currentUser.friends.length != 0) {
    currentUser.friends.forEach((friend) => {
      if (friendArr.indexOf(friend.name) === -1) {
        friendArr.push(friend.name);
        allUniqueUsers.push(friend);
      }
    });
    allUniqueUsers.push(currentUser);
  } else {
    allUniqueUsers.push(currentUser);
  }
  return allUniqueUsers;
}, []);

// Task 9
const filteredUsersArray = usersArray.filter((user) => {
  if (Number(user.balance.slice(0, -1)) >= 2000) {
    return user;
  }
});

// Task 10
const allUsersArray = usersArray.reduce((allUsers, currentUser) => {
  if (currentUser.friends.length != 0) {
    currentUser.friends.forEach((friend) => {
      allUsers.push(friend);
    });
    allUsers.push(currentUser);
  } else {
    allUsers.push(currentUser);
  }
  return allUsers;
}, []);

biggestBalance = 0;
let theRichestUserName;
allUsersArray.forEach((element) => {
  let userBalance = Number(element.balance.slice(0, -1));
  if (userBalance > biggestBalance) {
    biggestBalance = userBalance;
    theRichestUserName = element.name;
  }
});
// console.log(theRichestUserName);

// Task 11
const notLoneyUsersArr = usersArray.filter((element) => {
  if (element.friends.length != 0) {
    return element;
  }
});

notLoneyUsersArr.forEach((element) => {
  let elementFriendsArr = [];
  for (let index = 0; index < notLoneyUsersArr.length; index++) {
    if (element != notLoneyUsersArr[index]) {
      element.friends.forEach((friend) => {
        elementFriendsArr.push(friend.name);
      });
      let anotherFriendsArr = [];
      notLoneyUsersArr[index].friends.forEach((friend) => {
        anotherFriendsArr.push(friend.name);
      });
      for (let i = 0; i < elementFriendsArr.length; i++) {
        if (anotherFriendsArr.includes(elementFriendsArr[i])) {
          console.log(
            `${element.name} have mutual friend(s) with ${notLoneyUsersArr[index].name}`
          );
          break;
        }
      }
    }
  }
});

// Task 12
const arr1 = [10, "a", "5", 5, 1];
const arr2 = [10, "a", 5, 5, 1];
if ((arr1.length = arr2.length)) {
  let isSame = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isSame = false;
    }
  }
  if (isSame) {
    console.log("The arrays are same");
  } else {
    console.log("The arrays aren`t same");
  }
}

// Task 13
const stringsArr = ["искать такси", "привет мир"];
const stringForTask = stringsArr[0];
let splittedString = stringForTask.split("");
splittedString = splittedString.filter((word) => word !== " ");
let reverseSplittedString = splittedString.map((element) => element);
reverseSplittedString = reverseSplittedString.reverse();
let isPalindrome = false;
for (let i = 0; i < splittedString.length; i++) {
  if (splittedString[i] === reverseSplittedString[i]) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
  }
}
console.log(isPalindrome);

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

// Task 8

const copy = Object.assign([], usersArray);
// console.log(usersArray);
let allUsers = [];
copy.map((user) => {
  if (user.friends.lenght != 0) {
    user.friends.forEach((friend) => {
      allUsers.push(friend);
      // console.log(usersArray);
    });
    // delete user.friends;
    allUsers.push(user);
  } else {
    // delete user.friends;
    allUsers.push(user);
  }
});
console.log(usersArray);

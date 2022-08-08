//Task '1'
const name = "Oleksii";
let nameOfMine = "Oleksii";

nameOfMine = "NotOleksiiAnymore";

// Task '2'
let user, superUser, activeUserList, userActive;

//Task '3'
let arrNumbers = [0, 1, 2, 3];
let utapau = {
  Obi_Wan: "Hello there",
  Grievous: "General Kenobi!",
};

let partOfTheSentence = "World";
let sentence = `Hello ${partOfTheSentence}!`;

//Task '4'

/*
1.  10 < 3               false
2.  "hi" != "hello"      true
3.  1 == "1"             true
4.  null == "null"       false
5.  null === undefined   false
6.  1===1 && "hi"        hi
7.  true && "I love js"  I love js
8.  123 && "hi"||"hello" hi
9.  0+ ?true : false     syntaxError or if it was "0 ?true:false" the result would be false
10. 1+1                  2
11. "12"+"31"            1231
12. 3/"3"                1
13. 10*"hello"           NaN
14. "13"++               syntaxError 
15. ++13                 syntaxError increment can not be used correctly without variable
*/

//Task 16 '5'
let statusArray = ["user", "admin", "superadmin", "unauthorize"];
let userStatus = statusArray[0];

switch (userStatus) {
  case "user":
    console.log("Hello user");
    break;
  case "admin":
    console.log("Welcome!");
    break;
  case "superadmin":
    console.log("I’m happy to welcome you!");
    break;
  default:
    console.log("Whait a minute...");
    break;
}

userStatus === "user"
  ? console.log("How have you been?")
  : userStatus === "admin"
  ? console.log("Good to see you")
  : userStatus === "superadmin"
  ? console.log("Only strongest can rule the World")
  : console.log("...Who are you?");

if (userStatus === "user") {
  console.log("I hope you have a great day.");
} else if (userStatus === "admin") {
  console.log("Always remind them, who is the BOSS on tha block");
} else if (userStatus === "superadmin") {
  console.log("in our case - minecraft server");
} else {
  console.log("Log in, please!");
}

//Task 17 '6'
let harvestArray = [
  "onion",
  "orange",
  "broccoli",
  "lime",
  "corn",
  "grapes",
  "zucchini",
  "mango",
];
let harvest = harvestArray[1];

switch (harvest) {
  case "onion":
  case "broccoli":
  case "corn":
  case "zucchini":
    console.log(`${harvest} is a vegetable`);
    break;
  default:
    console.log(`${harvest} is a fruit`);
    break;
}

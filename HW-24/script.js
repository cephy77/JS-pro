const express = require("express");
const app = express();
const port = 4000;

app.route("/users").get((req, res) => {
  const usersArr = [
    "Mr. White",
    "Mr. Orange",
    "Mr. Blonde",
    "Mr. Pink",
    "Mr. Blue",
    "Mr. Brown",
  ];
  res.send(usersArr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

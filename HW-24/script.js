import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 4000;
//This is a bit complicated solution.
//The legality of that action has been negotiated in telegram chat
app.route("/users").get(async (req, res) => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  const usersArr = Array.from(await data.results).map((user) => user.name);
  res.send(await usersArr.join("</br>"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

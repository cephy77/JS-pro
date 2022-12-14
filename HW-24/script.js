import express from "express";
import fetch from "node-fetch";
import * as fs from "node:fs";
import cors from "cors";
const app = express();
app.use(cors());
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
const port = 4000;
// let arr = [];
// for (let i = 1; i < 49; i++) {
//   arr.push(i);
// }
app.get("/users", cors(corsOptions), (req, res) => {
  // fetch(`https://rickandmortyapi.com/api/character/${arr}`)
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     fs.writeFile("users.json", JSON.stringify(data), (e) => {
  //       if (e) {
  //         throw e;
  //       }
  //     });
  //     res.send(data);
  //   });
  const users = fs.readFileSync("users.json");
  res.send(JSON.parse(users));
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

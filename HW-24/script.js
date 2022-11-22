import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
app.use(cors());
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
const port = 4000;
app.get("/users", cors(corsOptions), (req, res) => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.json())
    .then((data) => res.send(data));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

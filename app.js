const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  if (req.body.login && req.body.password) {
    res.send(JSON.stringify(true));
  } else res.send(JSON.stringify(false));
});

app.get("/profile/:id", (req, res) => {
  console.log(req.params.id);
  res.send(JSON.stringify("Получение profile по id юзера"));
});

app.post("/profile/:id", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify("Post profile по id юзера"));
});

app.get("/travel/:id", (req, res) => {
  res.send(JSON.stringify("Получение travel по id"));
});

app.post("/travel", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(true));
});

app.get("/future/:id", (req, res) => {
  res.send(JSON.stringify(["Получение", "future"]));
});

app.get("/history/:id", (req, res) => {
  res.send(JSON.stringify(["Получение", "history"]));
});

app.get("/favorites/:id", (req, res) => {
  console.log(req.params.id);
  res.send(JSON.stringify(["Получение", "favorites"]));
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify("search"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

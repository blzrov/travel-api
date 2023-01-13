import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import registration from "./registration.js";
import createTravel from "./createTravel.js";
import getUserData from "./getUserData.js";
import login from "./login.js";
import updateUserData from "./updateUserData.js";
import getFavoritesTravels from "./getFavoritesTravels.js";
import search from "./search.js";
<<<<<<< HEAD
import setFavorite from "./setFavorite.js";
=======
import getTravel from "./getTravel.js";
>>>>>>> e2d0a6b43196bc3c0b5f22581258ce28df106695

const port = 8080;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

<<<<<<< HEAD
app.post("/signIn/", (req, res) => { //+
  if (req.body.login && req.body.password) {
    res.send(JSON.stringify(true));
  } else res.send(JSON.stringify(false));
=======
app.post("/signIn/", (req, res) => {
  //+
  const user = login(req, res);
>>>>>>> e2d0a6b43196bc3c0b5f22581258ce28df106695
});

app.get("/profile/:id", (req, res) => {
  //+
  getUserData(req, res);
  res.send(JSON.stringify("Получение profile по id юзера"));
});

app.post("/profile/:id", (req, res) => {
  //++
  updateUserData(req, res);
  console.log("I am here!");
  res.send(JSON.stringify("Post profile по id юзера"));
});

app.get("/travel/:id", (req, res) => {
  //+
  //Не нашел откуда вызывается. Но судя по описанию просто вернуть travel.
  getTravel(req, res);
});

app.post("/travel", (req, res) => {
  //+
  createTravel(req, res);
  res.send(JSON.stringify(true));
});

app.get("/future/:id", (req, res) => {
  res.send(JSON.stringify(["Получение", "future"]));
});

app.get("/history/:id", (req, res) => {
  res.send(JSON.stringify(["Получение", "history"]));
});

app.get("/favorites/:id", (req, res) => {
  getFavoritesTravels(req, res);
  res.send(JSON.stringify(["Получение", "favorites"]));
});

<<<<<<< HEAD
app.post("/search", (req, res) => { //+ 
=======
app.post("/search", (req, res) => {
  //+ Но лучше затестить
>>>>>>> e2d0a6b43196bc3c0b5f22581258ce28df106695
  const result = search(req, res);
});

app.post("/signUp/", (req, res) => {
  //+
  registration(req);
});

app.post("/setFavorite/", (req, res) => {
  setFavorite(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

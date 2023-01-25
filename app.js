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
import setFavorite from "./setFavorite.js";
import getTravel from "./getTravel.js";
import joinTravel from "./joinTravel.js";
import getFutureHistoryTravels from "./getFutureHistoryTravels.js";
import getFullUser from "./getFullUser.js";
import youAreOranize from "./youAreOrganize.js";
import leaveFeedback from "./leaveFeedback.js";

const port = 8080;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());

app.post("/signIn/", (req, res) => {
  //+
  const user = login(req, res);
});

app.post("/leaveFeedback/", (req, res) => {
  //+
  leaveFeedback(req, res);
});

app.get("/profile/:id", (req, res) => {
  //+
  getUserData(req, res);
});

app.post("/profile/:id", (req, res) => {
  //++
  updateUserData(req, res);
  res.send(JSON.stringify("Post profile по id юзера"));
});

app.get("/travel/:id", (req, res) => {
  //+
  console.log(req.query.login);
  getTravel(req, res);
});

app.post("/travel", (req, res) => {
  //+
  createTravel(req, res);
});

app.get("/future/:id", (req, res) => {
  //+
  getFutureHistoryTravels(req, res, "open");
});

app.get("/history/:id", (req, res) => {
  getFutureHistoryTravels(req, res, "closed");
});

app.get("/favorites/:login", (req, res) => {
  //+
  getFavoritesTravels(req, res);
});

app.post("/search", (req, res) => {
  //+
  search(req, res);
});

app.post("/signUp/", (req, res) => {
  //+
  registration(req);
});

app.post("/setFavorite/", (req, res) => {
  //+
  setFavorite(req, res);
});

app.post("/joinTravel/", (req, res) => {
  //+
  joinTravel(req, res);
});

app.get("/getFullUser/:id", (req, res) => {
  //+
  getFullUser(req, res);
});

app.get("/myCreatedTravels/:id", (req, res) => {
  youAreOranize(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

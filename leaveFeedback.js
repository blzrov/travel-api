import { MongoClient } from "mongodb";

export default async function leaveFeedback(req, res, stat) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collectionTravels = client.db("Project2022UrFu").collection("Travels");
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  const user = await collectionUsers.findOne({login: req.body.login});
  await collectionTravels.updateOne({id: req.body.id}, {$push: {reviews: {name: user.name, surname: user.surname, reviews: req.body.review}}});
  res.send(true);
}

import { MongoClient } from "mongodb";

export default async function getFullUser(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  const user = await collectionUsers.findOne({ id: req.params.id });
  const userJson = JSON.stringify(truseravels);
  res.send(userJson || false);
  if (user == null) {
    return false;
  } else {
    return userJson;
  }
}

import { MongoClient } from "mongodb";

export default async function getFullUser(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  console.log(req.params.id)
  const user = await collectionUsers.findOne({ login: req.params.id });
  console.log(user)
  const userJson = JSON.stringify(user);
  res.send(userJson || false);
  if (user == null) {
    return false;
  } else {
    return userJson;
  }
}

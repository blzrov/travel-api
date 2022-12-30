import { MongoClient } from "mongodb";

export default async function getUserData(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  const user = await collection.findOne({ id: Number(req.params.id) });
  const userJson = JSON.stringify(user);
  res.send(userJson);
  if (user == null) {
    return false;
  } else {
    return userJson;
  }
}

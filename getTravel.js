import { MongoClient } from "mongodb";

export default async function getUserData(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  const travel = await collection.findOne({ id: Number(req.params.id) });
  const travelJson = JSON.stringify(travel);
  res.send(travelJson);
  if (travel == null) {
    return false;
  } else {
    return travelJson;
  }
}

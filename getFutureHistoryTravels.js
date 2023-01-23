import { MongoClient } from "mongodb";

export default async function getFutureTravels(req, res, stat) {
  
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collectionTravels = client.db("Project2022UrFu").collection("Travels");
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  const user = await collectionUsers.findOne({ login: req.params.id });
  const travels = await collectionTravels.find({$and: [{id: {$in : user.travels}, status: stat}]}).toArray();
  const result = JSON.stringify(travels);
  res.send(result || false);
}

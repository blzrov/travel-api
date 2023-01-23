import { MongoClient } from "mongodb";

export default async function getUserData(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  //const user = await collection.findOne({ id: Number(req.params.login) });
  const travel = await collection.findOne({ id: Number(req.params.id) });
  // if(user.favorites.includes(travel.id)){
  //     actualTravel.isFavorite = true;
  // }
  // else{
  //     actualTravel.isFavorite = false;
  // }

  //Расскоментить кода в params будет login
  const users = await collectionUsers.find({ travels: travel.id }).toArray();
  travel.members = users;
  const result = JSON.stringify(travel);
  res.send(result || false);
}

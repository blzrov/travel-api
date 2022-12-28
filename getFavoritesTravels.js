import { MongoClient } from "mongodb";

export default async function getFavoritesTravels(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  console.log(req.body);
  const user = await collection.findOne({login: req.body.id});         
  const userJson = JSON.stringify(user);
  console.log(userJson);
  if(user == null){
    return false;
  }else{
    return userJson;
  }
}
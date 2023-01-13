import { MongoClient } from "mongodb";

export default async function getFavoritesTravels(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  const travel = await collection.findOne({login: req.body.id});         
  const travelJson = JSON.stringify(travel);
  if(travel == null){
    return false;
  }else{
    return travelJson;
  }
}
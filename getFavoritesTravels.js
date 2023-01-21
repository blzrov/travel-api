import { MongoClient } from "mongodb";

export default async function getFavoritesTravels(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  const collectionTravels = client.db("Project2022UrFu").collection("Travels");
  const user = await collectionUsers.findOne({login: req.params.login});
  const travels = await collectionTravels.find({id: {$in : user.favorites}}).toArray();
  travels.forEach(element => {
    element.isFavorite = true;
  });         
  const travelJson = JSON.stringify(travels);
  res.send(travelJson || false);
  console.log(travelJson);
  if(user == null){
    return false;
  }else{
    return travelJson;
  }
}
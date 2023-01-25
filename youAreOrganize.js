import { MongoClient } from "mongodb";

export default async function youAreOranize(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collectionUsers = client.db("Project2022UrFu").collection("Users");
  const collectionTravels = client.db("Project2022UrFu").collection("Travels");
  console.log(req.params.id)
  const user = await collectionUsers.findOne({ login: req.params.id });
  console.log(user)
  const travels = await collectionTravels
    .find({ organizer: { $in: user.login } })
    .toArray();
  travels.forEach((element) => {
    element.isFavorite = true;
  });
  const travelJson = JSON.stringify(travels);
  res.send(travelJson || false);
  if (user == null) {
    return false;
  } else {
    return travelJson;
  }
}

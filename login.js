import { MongoClient } from "mongodb";

export default async function login(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Users");
  
  const user = await collection.findOne({login: req.body.login});         
  let auth = false;
  if(user != null 
    && user.login == req.body.login 
    && user.password == req.body.password){
    auth = true;
  }
  console.log(auth);
  return await auth;
}
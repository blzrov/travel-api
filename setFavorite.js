import { MongoClient } from "mongodb";
import getUserData from "./getUserData.js";
import bcrypt from "bcryptjs";

export default async function setFavorite(req, res) {
  const uri = "mongodb://localhost:27017";
  //console.log(req.body);
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Users");
  const user = await collection.findOne({login: req.body.loginContext});
  if(await travelInFavoritesAtUser(user, req.body.id)){
    collection.updateOne({login: req.body.loginContext},{$pull:{
        favorites: req.body.id
    }});    
  }
  else
  {
    collection.updateOne({login: req.body.loginContext},{$push:{
        favorites: req.body.id
    }}); 
  }
}

async function travelInFavoritesAtUser(user, idTravel){
    let res = false;
    user.favorites.forEach(element => {
    if(element == idTravel){
        res = true;
    }    
    });
    //console.log(res);
    return res;
}
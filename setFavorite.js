import { MongoClient } from "mongodb";
import getUserData from "./getUserData.js";
import bcrypt from "bcryptjs";

export default async function setFavorite(req, res) {
  const uri = "mongodb://localhost:27017";
  console.log(req.body);
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Users");
  const user = await collection.findOne({login: req.body.loginContext});
  user.favorites.forEach(element => {
    
  });
  //const olduUserData = await collection.findOne({login: req.body.login});
  //const user = new User(req.body);
    
  //const updateUser = getUserData(req, res); //Скорее всего посыпеться, тк login передается в логин, а в логике getUserData login лежит в id 
  //const updateUserJson = JSON.stringify(updateUser);
  //return await updateUserJson;
}

// class User{
//   constructor(body)
//   {
//     this.name = body.name;
//     this.surname = body.surname;
//     this.birth = body.birth;
//     this.sex = body.sex; 
//     this.num = body.num;
//     this.id = body.id;
//     this.region = body.region;
//     this.password = body.password;
//     this.about = body.about;
//   };
//   login;
//}
function travelInFavoritesAtUser(){

    
}
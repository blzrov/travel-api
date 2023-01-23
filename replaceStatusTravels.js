import { MongoClient } from "mongodb";
import getUserData from "./getUserData.js";
import bcrypt from "bcryptjs";
export default async function replaceStatusTravels(allData) {  
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  let now = new Date();
  allData.forEach(travel => {
    if(travel.finish < now){
        collection.updateOne({id: travel.id},{$set:{
            status: "closed",
            canJoin: false
        }});
    }  
  });
}
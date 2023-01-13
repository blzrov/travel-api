import { MongoClient } from "mongodb";
import getUserData from "./getUserData.js";
import bcrypt from "bcryptjs";
//Макет. Доделать.
export default async function search(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  const travelParameters = new TravelParameters(req.body);  
  const allData = await collection.find().toArray();
  const travels = await getActualData(travelParameters, new Set(allData)); 
  const travelsJson = JSON.stringify(travels);
  console.log(travelsJson);
  res.send(travelsJson);
}

class TravelParameters{
  constructor(body)
  {
    this.region = body.region != '' ? body.region : null;
    this.start = body.start != '' && body.start != null ? new Date(body.start) : null;
    this.finish = body.finish != '' && body.finish != null ? new Date(body.finish) : null;
    this.longMin = body.longMin != '' && body.longMin != null ? Number(body.longMin) : null ; 
    this.longMax = body.longMax != '' && body.longMax != null ? Number(body.longMax) : null ; 
    this.costMin = body.costMin != '' && body.costMin != null ? Number(body.costMin) : null ;
    this.costMax = body.costMax != '' && body.costMax != null ? Number(body.costMax) : null ;
  };
}
async function getActualData(travelParameters, allData)
{
    let actualData = new Set();
    if(travelParameters.region !== null){
        allData.forEach(element => {
            if(element.region == travelParameters.region){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set();
    }

    if(travelParameters.start !== null && travelParameters.finish !== null){     
        allData.forEach(element => {
            if(element.start > travelParameters.start && element.finish <= travelParameters.finish){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set();    
    } else if(travelParameters.start !== null){
        allData.forEach(element => {
            if(element.start > travelParameters.start){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set(); 
    } else if(travelParameters.finish !== null){
        allData.forEach(element => {
            if(element.finish <= travelParameters.finish){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set(); 
    }


    if(travelParameters.longMin !== null){
        allData.forEach(element => {
            if(element.countday >=  travelParameters.longMin){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set();
    }

    if(travelParameters.longMax !== null){
        allData.forEach(element => {
            if(element.countday <=  travelParameters.longMax){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set();
    }

    if(travelParameters.costMin !== null){
        allData.forEach(element => {
            if(element.cost >=  travelParameters.costMin){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set(); 
    }

    if(travelParameters.costMax !== null){
        allData.forEach(element => {
            if(element.cost <=  travelParameters.costMax){
                actualData.add(element);
            }    
        });
        allData = actualData;
        actualData = new Set();
    }
    return [...allData];
}
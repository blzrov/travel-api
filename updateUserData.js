import { MongoClient } from "mongodb";
import getUserData from "./getUserData.js";
import bcrypt from "bcryptjs";

export default async function updateUserData(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Users");
  const olduUserData = await collection.findOne({login: req.body.login});
  const user = new User(req.body);
  console.log(user);
  //Api. То, что необходимо получить от клиента написано через req.query.        
  collection.updateOne({_id: olduUserData._id},{$set:{
    name: user.name != null ? user.name : olduUserData.name, //Возможно null заменить на undefainded
    surname: user.surname != null ? user.surname : olduUserData.surname,
    login: olduUserData.login,
    birth: user.birth != null ? user.birth : olduUserData.birth,
    sex: user.sex != null ? user.sex : olduUserData.sex,
    num: user.num != null ? user.num : olduUserData.num,
    id: olduUserData.id,
    region: olduUserData.region,
    password: olduUserData.password, 
}});
  const updateUser = getUserData(req, res); //Скорее всего посыпеться, тк login передается в логин, а в логике getUserData login лежит в id 
  const updateUserJson = JSON.stringify(updateUser);
  return await updateUserJson;
}

class User{
  constructor(body)
  {
    this.name = body.name;
    this.surname = body.surname;
    this.birth = body.birth;
    this.sex = body.sex; 
    this.num = body.num;
    this.id = body.id;
    this.region = body.region;
    this.password = body.password;
  };
  login;
}
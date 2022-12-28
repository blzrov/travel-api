import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
    //Добавляет в базу но не отсылает ответ
export default async function registration(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Users");

  if (await loginUniquenessCheck(req.body.login, collection)) {
    const user = new User(req.body);
    let actualNew_myId = await getActualNewId(collection);
    user.id = actualNew_myId;
    bcrypt.hash(req.query.password, 10, async function(err, hash) {   
    //Api. То, что необходимо получить от клиента написано через req.query.        
    collection.insertOne({
    name: user.name,
    surname: user.surname,
    login: user.login,
    birth: user.birth,
    sex: user.sex,
    num: user.num,
    id: user.id,
    region: user.region,
    password: user.password,
    favorites: user.favorites
    });
    const userJson = JSON.stringify(user);
    return await userJson;
    });
  } else {
    return await false;
  }
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
    this.login = body.login;
    this.password = body.password;
    this.favorites = [];
  };
  //password;
  login;
}

async function loginUniquenessCheck(newLogin, collection) {
  let loginInBd = await collection.findOne({ login: newLogin });
  return !loginInBd;
}

async function getActualNewId(collection){
  const newId = (await collection.find().sort({ id: -1 }).limit(1).toArray()).map(
    function (u) {
      return u.id;
    }
  )[0] + 1;
  return await newId;
}

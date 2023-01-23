import { MongoClient } from "mongodb";

export default async function createTravel(req, res) {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db("Project2022UrFu").collection("Travels");
  if (await loginUniquenessCheck(req.body.name, collection)) {
    const travel = new Travel(req.body);
    let actualNew_myId = await getActualNewId(collection);
    travel.id = actualNew_myId;

    collection.insertOne({
    name: travel.name,
    region: travel.region,
    place: travel.place,
    placeDescription: travel.placeDescription,
    organizer: travel.organizer,
    organizer_Id: travel.organizer_Id,
    guide: travel.guide,
    id: travel.id,
    start: travel.start,
    finish: travel.finish,
    countday: travel.countday,
    description: travel.description,
    cost: travel.cost,
    status: travel.status,
    seats: travel.seats,
    items: travel.items,
    seatsIsTaken: travel.seatsIsTaken,
    canJoin: travel.canJoin,
    media: travel.media,
    members: travel.members,
    reviews: travel.reviews


  });
  const travelJson = JSON.stringify(travel);
  return travelJson;
  } else {
    return false;
  }
}

class Travel {
  constructor(body) {
    this.name = body.name;
    this.region = body.region;
    this.place = body.place;
    this.placeDescription = body.placeDescription;
    this.organizer = body.organizer;
    this.organizer_Id = "Нужно получить id пользователя";
    this.guide = body.guide;
    this.start = new Date(body.start);
    this.finish = new Date(body.finish);
    this.countday = getCountDay(body.start, body.finish);
    this.description = body.description;
    this.cost = Number(body.cost);
    this.status = "open";
    this.seats = Number(body.seats);
    this.items = body.items;
    this.seatsIsTaken = 0;
    this.canJoin = true,
    this.media = body.media,
    this.members = []; 
    this.reviews = [];
  };
  id;
}

async function getActualNewId(collection) {
  const newId =
    (await collection.find().sort({ id: -1 }).limit(1).toArray()).map(function (
      u
    ) {
      return u.id;
    })[0] + 1;
  return await newId;
}

async function loginUniquenessCheck(newName, collection) {
  let loginInBd = await collection.findOne({ name: newName });
  return !loginInBd;
}

function getCountDay(start, finish) {
  const startDate = new Date(start).getTime();
  const finishDate = new Date(finish).getTime();
  const countDay = (finishDate - startDate) / (1000 * 60 * 60 * 24);
  return countDay;
}

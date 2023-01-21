import { MongoClient } from "mongodb";
export default async function joinTravel(req, res) {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    const collectionUsers = client.db("Project2022UrFu").collection("Users");
    const collectionTravels = client.db("Project2022UrFu").collection("Travels");
    const user = await collectionUsers.findOne({login: req.body.loginContext});
    const travel = await collectionTravels.findOne({id: req.body.id});
    let userInMembers = false;

    if(travel.canJoin){
        travel.members.forEach(member => {
            if(member.login == user.login){
                userInMembers = true;
            }    
        });
        travel.seatsIsTaken++;
        if(travel.seatsIsTaken == travel.seats){
            travel.canJoin = false;
        }
        if(!userInMembers){
            await collectionTravels.updateOne({id: req.body.id}, {$push: {members: { login: user.login}}, $inc: {seatsIsTaken: 1}, $set: {canJoin: travel.canJoin}});
            await collectionUsers.updateOne({login: req.body.loginContext}, {$push: {travels: travel.id}});
        }

        

    }
}
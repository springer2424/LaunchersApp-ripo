import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb+srv://ychiel_db:yechiel123@cluster0.m6onqol.mongodb.net/?appName=Cluster0"
const DB_NAME = "launchersDB"

let client;
let dbConnction;

export async function initDb(){
    try{
        
        client = new MongoClient(MONGO_URI);
        await client.connect();
        dbConnction = client.db(DB_NAME);
        console.log("mongodb inishilaze")


    }catch(err){
        console.log("connecting to nmongo faild"+err.message)

    }

}

export async function getMongoConn(){
    if(!client){
        client = new MongoClient(MONGO_URI);
    }
    if(!dbConnction){
        await client.connect();
        dbConnction = client.db(DB_NAME);

    }
    return dbConnction
}
import { getMongoConn } from "../db/dbconnection.js"
import { ObjectId } from "mongodb"




export const getAllLaunchers = async (req,res) => {
    try{
        const mongoConn = await getMongoConn()
        const launchersCollection = mongoConn.collection("launchers")
        const launchers = await launchersCollection.find({}).toArray();
        if(!launchers){
            res.status(404).json({msg:"not found" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :launchers})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})

    }
}



export const getLauncherById = async (req,res) => {
    try{
        const {id} = req.params
        const mongoConn = await getMongoConn()
        const launchersCollection = mongoConn.collection("launchers")
        const launcher = await launchersCollection.findOne({_id:new ObjectId(id)});
        if(!launcher){
            res.status(404).json({msg:"not found" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :launcher})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})

    }
}


export const createLauncher = async (req,res) => {
    try{
        const {city,rocketType,latitude,longitude,name} = req.body
        const newLauncher = {
            city,
            rocketType,
            latitude,
            longitude,
            name
        }
        const mongoConn = await getMongoConn()
        const launchersCollection = mongoConn.collection("launchers")
        const launcher = await launchersCollection.insertOne(newLauncher);
         if(!launcher){
            res.status(404).json({msg:"somthin went ronge" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :launcher})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
    }
    


export const deleteLauncherById = async (req,res) => {
    try{
        const {id} = req.params
        const mongoConn = await getMongoConn()
        const launchersCollection = mongoConn.collection("launchers")
        const launcher = await launchersCollection.deleteOne({_id:new ObjectId(id)});
        if(!launcher){
            res.status(404).json({msg:"not found" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :launcher})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
}
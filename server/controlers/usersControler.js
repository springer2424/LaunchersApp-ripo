import { getMongoConn } from "../db/dbconnection.js"
import { ObjectId } from "mongodb"
import jwt from "jsonwebtoken"


const JWT_SECRET = '1234';



export const logIn = async (req,res) => {
    try{
        const {username,password} = req.body
        if(!username || !password){
            return res.status(400).json({msg:"did not get username and password"})
        }
        const mongoConn = await getMongoConn()
        const usersCollection = mongoConn.collection("users")
        const findUser = await usersCollection.findOne({username : username , password :password});
        if(!findUser){
            res.status(404).json({msg:"not found" , data:null})
        }
        const payload = {id : findUser._id};
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
        if(!token){
            res.status(400).json({msg:"samthin went rong" , data:null})
        }
        const updatedUser = await usersCollection.updateOne({ _id: findUser._id },{ $set: { last_login: new Date() } });
        const user = await usersCollection.findOne({ _id: findUser._id });
        res.status(200).json({msg : "seccess" , data :{user,token}})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
}


export const createUser = async (req,res) => {
    try{
        const {username,password,email,user_type} = req.body
        if(!username||!password||!email||!user_type){
            return res.status(400).json({msg:"username,password,email,user_type one or more filds ar mising"})
        }
        const mongoConn = await getMongoConn()
        const usersCollection = mongoConn.collection("users")
         const typeExist = await usersCollection.findOne({user_type});
        if(typeExist){
            return res.status(400).json({msg:"user_type allredi Exist " , data:null})
        }
        const newUser = {
            username,
            password,
            email,
            user_type,
            last_login : "this is the first time"
        }
        const user = await usersCollection.insertOne(newUser);
        if(!user){
            res.status(400).json({msg:"samthin went rong" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :user})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
}



export const updateUser = async (req,res) => {
    try{
        const {username,password,email,user_type} = req.body
        const {id} = req.params
        const mongoConn = await getMongoConn()
        const usersCollection = mongoConn.collection("users")
        
        const originUser = await usersCollection.findOne({_id:new ObjectId(id)});
        
        if(!originUser){
            res.status(404).json({msg:"not found" , data:null})
        }
        
        const typeExist = await usersCollection.findOne({user_type});
        
        if(typeExist){
            return res.status(400).json({msg:"user_type allredi Exist canot update" , data:null})
        }
        const upUser = {
            username : username || originUser.username,
            password : password || originUser.password,
            email: email || originUser.email,
            user_type : user_type || originUser.user_type
        }
        const updatedUser = await usersCollection.updateOne({ _id:new ObjectId(id)},{ $set: {...upUser} });
        
        if(!updatedUser){
            res.status(400).json({msg:"samthin went rong" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :updatedUser})
    }catch(err){
        res.status(500).json({msg : "errorrrrrr" + err.message ,data: null})
    }
}

export const deleteUserById = async (req,res) => {
    try{
        const {id} = req.params
        const mongoConn = await getMongoConn()
        const usersCollection = mongoConn.collection("users")
        const user = await usersCollection.deleteOne({_id:new ObjectId(id)});
        if(!user){
            res.status(404).json({msg:"not found" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :user})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
}

export const getUserById = async (req,res) => {
    try{
        const {id} = req.params
        const mongoConn = await getMongoConn()
        const usersCollection = mongoConn.collection("users")
        const user = await usersCollection.findOne({_id:new ObjectId(id)});
        if(!user){
            res.status(404).json({msg:"not found" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :user})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
}

export const getAllUsers = async (req,res) => {
    try{
        
        const mongoConn = await getMongoConn()
        const usersCollection = mongoConn.collection("users")
        const users = await usersCollection.find({}).toArray();
        if(!users){
            res.status(404).json({msg:"not found" , data:null})
        }
        res.status(200).json({msg : "seccess" , data :users})
    }catch(err){
        res.status(500).json({msg : "error" + err.message ,data: null})
    }
}












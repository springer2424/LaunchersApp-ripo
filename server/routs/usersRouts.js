import express from "express"
import { createUser, deleteUserById, getAllUsers, getUserById, logIn, updateUser } from "../controlers/usersControler.js";
import { midelothriztion, othentiction } from "../midelwers/userMidlwer.js";




const router = express.Router();

router.post("/auth/login",logIn)
router.post("/auth/register/create",midelothriztion,othentiction(["admin"]),createUser)
router.put("/auth/register/update/:id",midelothriztion,othentiction(["admin"]),updateUser)
router.delete("/auth/register/delete/:id",midelothriztion,othentiction(["admin"]),deleteUserById)
router.get("/auth/getUser",midelothriztion,othentiction(["admin"]),getAllUsers)
router.get("/auth/getUser/:id",midelothriztion,getUserById)


export default router
import express from "express"
import { createUser, deleteUserById, getAllUsers, getUserById, logIn, updateUser } from "../controlers/usersControler.js";




const router = express.Router();

router.post("/auth/login",logIn)
router.post("/auth/register/create",createUser)
router.put("/auth/register/update/:id",updateUser)
router.delete("/auth/register/delete/:id",deleteUserById)
router.get("/auth/getUser",getAllUsers)
router.get("/auth/getUser/:id",getUserById)


export default router
import express from "express"
import { createLauncher, deleteLauncherById, getAllLaunchers, getLauncherById } from "../controlers/launchersControl.js";
import { midelothriztion, othentiction } from "../midelwers/userMidlwer.js";


const router = express.Router();




router.get("/launchers",midelothriztion,getAllLaunchers)
router.post("/launchers",midelothriztion,othentiction(["admin","intelligence"]),createLauncher)
router.get("/launchers/:id",midelothriztion,getLauncherById)
router.delete("/launchers/:id",midelothriztion,othentiction(["admin","intelligence"]),deleteLauncherById)


export default router
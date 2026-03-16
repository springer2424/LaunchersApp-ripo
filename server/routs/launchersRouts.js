import express from "express"
import { createLauncher, deleteLauncherById, getAllLaunchers, getLauncherById } from "../controlers/launchersControl.js";


const router = express.Router();

router.get("/launchers",getAllLaunchers)
router.post("/launchers",createLauncher)
router.get("/launchers/:id",getLauncherById)
router.delete("/launchers/:id",deleteLauncherById)


export default router
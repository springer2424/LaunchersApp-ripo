import express from "express"
import cors from "cors"
import { initDb } from "./db/dbconnection.js"

const port = 5000

const app = express()

app.use(express.json())
app.use(cors())






app.listen(port, async() => {
    await initDb()
  console.log(`Example app listening on port ${port}`)
})
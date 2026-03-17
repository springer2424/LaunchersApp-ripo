import express from "express"
import cors from "cors"
import { initDb } from "./db/dbconnection.js"
import routes from "./routs/launchersRouts.js"
import userRouts from "./routs/usersRouts.js"

const port = 5000

const app = express()

app.use(express.json())
app.use(cors())



app.use("/api",routes)
app.use("/api",userRouts)


app.listen(port, async() => {
    await initDb()
  console.log(`Example app listening on port ${port}`)
})
import "reflect-metadata"
import express from "express"
import "./database/dataSource.ts"
import "./database"
import { routes } from "./routes"

const cors = require("cors")

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.listen(2999, () => console.log("Server is running"))

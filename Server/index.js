import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
const app = express()

dotenv.config()
app.use(cors())
connectDB(app);
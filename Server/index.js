import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import router from "./routes/index.js"
const app = express()

dotenv.config()
app.use(cors())

app.use('/', router.userRourter);
app.use('/expense', router.expenseRouter);
app.use('/dailyExpense', router.dailyExpenseRouter);
app.use('/interval', router.intervalRouter)

connectDB(app);
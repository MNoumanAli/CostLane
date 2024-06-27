import mongoose from "mongoose";
import Schema from "../config/schema.js";

const expenseSchema = new Schema(
    {
        cost : {
            type : Number,
            require : true,
        },
        item : {
            type : String,
            require : true,
        },
    }
)

const expense = mongoose.model('Expense', expenseSchema , 'Expense');
export default expense
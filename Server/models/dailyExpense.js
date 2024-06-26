import Schema from "../config/schema.js";

const dailyExpenseSchema = new Schema(
    {
        date : {
            type : Date,
            default : Date.now,
        },
        totalCost : {
            type : Number,
            default : 0,
        },
        intervalId : {
            type : Schema.Types.ObjectId,
            ref : 'Interval',
        },
        expenses : {
            type : [Schema.Types.ObjectId],
            ref : 'Expense'
        },
    }
);

const dailyExpense = mongoose.model('DailyExpense', dailyExpenseSchema, 'DailyExpense');
export default dailyExpense;

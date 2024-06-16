import Schema from "./config/config";


const IntervalSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : 'User',
        },
        startDate : {
            type : Date,
            default : Date.now,
        },
        endDate : {
            type : Date,
        },
        totalExpense : {
            type : Number,
            default : 0,
        },
        isActive : {
            type : Boolean,
            default : true,
        },
    }
);

const interval = mongoose.model('interval', IntervalSchema, 'interval');
export default interval;

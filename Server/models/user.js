import Schema from "../config/schema.js";

const UserSchema = new Schema(
    {
        firstName : {
            type : String,
            require : true,
        },
        lastName : {
            type : String,
            require : true,
        },
        email : {
            type : String,
            require : true,
        },
        password : {
            type : String,
            require : true,
        },
        phone : {
            type : String,
        },
    }
);

const user = mongoose.model('User', UserSchema, 'User');
export default user;

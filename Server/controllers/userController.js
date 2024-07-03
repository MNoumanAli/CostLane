import jsonwebtoken from "jsonwebtoken";
import { createUser, getUserByEmail, verifyIfUserExist, userExistByEmail } from "../services/userService";

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        var user = await getUserByEmail(email);
        if(user)
        {
            if(userExistByEmail(user.email,password))
            {
                const token = await jsonwebtoken.sign({email : user.email, id : user._id}, process.env.ACCESS_TOKEN_SECRET);
                res.status(200).send({user : user , AccessToken : token});
            }
            else
                res.status(400).send("Incorrect Password");
        }
        else
            res.status(400).send("Invalid Emailc Address");
    } catch (error) {
        res.status(400).send(error.message);   
    }
}

export const signUp = async (req, res) => {
    try {
        if(!verifyIfUserExist(req.body.email))
        {
            const newUser = await createUser(req.body);
            const token = await jsonwebtoken.sign({email : user.email, id : user._id}, process.env.ACCESS_TOKEN_SECRET);
            res.Status(200).send({user : newUser , AccessToken : token});
        }
        else
            res.status(400).send("User already Exist");
    } catch (error) {
        res.status(400).send(error.message);   
    }
}
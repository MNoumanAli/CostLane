import jsonwebtoken from "jsonwebtoken";
import { createUser, getUserByEmail, verifyIfUserExist, userExistByEmail, verifyUserPasswordByEmail } from "../services/userService";

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        var user = await getUserByEmail(email);
        if(user)
        {
            if(verifyUserPasswordByEmail(user.email,password))
            {
                const token = await jsonwebtoken.sign({email : user.email, id : user._id}, process.env.ACCESS_TOKEN_SECRET);
                res.status(200).send({user : user , AccessToken : token});
            }
            else
                res.status(401).send({
                    errors : "Unauthorize",
                    message : "Incorrect password",   
                });
        }
        else
            res.status(401).send({
                errors : "Unaurthorize",
                message : "Incorrect Email",
            });
    } catch (error) {
        res.status(500).send({
            errors : "Interval Server Error",
            message : error.message,
        });   
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
            res.status(409).send({
                errors : "Conflict",
                message : "User with this email already exist",
            });
    } catch (error) {
        res.status(500).send({
            errors : "Internal Server Error",
            message : error.message,
        });   
    }
}
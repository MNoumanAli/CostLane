import express from "express";
import validateSchema from "../middlewares/validateSchema";
import loginSchema from "../schemas/loginSchema";
import signupSchema from "../schemas/signupSchema";

const userRourter = express.Router();
const validateLoginSchema = validateSchema(loginSchema);
const validateSignUpSchema = validateSchema(signupSchema);

userRourter.post('/login', validateLoginSchema, (req,res)=> {res.status(200).send({});})
userRourter.post('/signup', validateSignUpSchema, (req,res)=> {res.status(200).send({});})
export default userRourter;
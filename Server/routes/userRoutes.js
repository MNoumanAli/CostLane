import express from "express";
import validateSchema from "../middlewares/validateSchema";
import loginSchema from "../schemas/loginSchema";
import signupSchema from "../schemas/signupSchema";
import { login, signUp } from "../controllers/userController";

const userRourter = express.Router();
const validateLoginSchema = validateSchema(loginSchema);
const validateSignUpSchema = validateSchema(signupSchema);

userRourter.post('/login', validateLoginSchema, login);
userRourter.post('/signup', validateSignUpSchema, signUp);

export default userRourter;
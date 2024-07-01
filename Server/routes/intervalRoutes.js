import express from "express";
import authentication from "../middlewares/authentication";
import validateSchema from "../middlewares/validateSchema";
import intervalSchema from "../schemas/intervalSchema";

const intervalRouter = express.Router();
const validateIntervalSchema = validateSchema(intervalSchema);

intervalRoutes.get('/get', authentication, (req,res)=> {res.status(200).send({});});
intervalRoutes.get('/get/all', authentication, (req,res)=> {res.status(200).send({});});
intervalRoutes.post('/post', authentication, validateIntervalSchema, (req,res)=> {res.status(200).send({});});
intervalRoutes.put('/update/:id', authentication, (req,res)=> {res.status(200).send({});});
intervalRoutes.delete('/delete/:id', authentication, (req,res)=> {res.status(200).send({});});

export default intervalRouter;
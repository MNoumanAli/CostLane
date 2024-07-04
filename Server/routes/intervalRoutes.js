import express from "express";
import authentication from "../middlewares/authentication";
import validateSchema from "../middlewares/validateSchema";
import intervalSchema from "../schemas/intervalSchema";

const intervalRouter = express.Router();
const validateIntervalSchema = validateSchema(intervalSchema);

intervalRouter.get('/get', authentication, (req,res)=> {res.status(200).send({});});
intervalRouter.get('/get/all', authentication, (req,res)=> {res.status(200).send({});});
intervalRouter.post('/post', authentication, validateIntervalSchema, (req,res)=> {res.status(200).send({});});
intervalRouter.put('/update/:id', authentication, (req,res)=> {res.status(200).send({});});
intervalRouter.delete('/delete/:id', authentication, (req,res)=> {res.status(200).send({});});

export default intervalRouter;
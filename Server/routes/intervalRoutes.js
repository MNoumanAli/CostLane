import express from "express";
import authentication from "../middlewares/authentication";
import validateSchema from "../middlewares/validateSchema";
import intervalSchema from "../schemas/intervalSchema";
import { createInterval, getAllIntervals, getCurrentInterval } from "../controllers/intervalController";

const intervalRouter = express.Router();
const validateIntervalSchema = validateSchema(intervalSchema);

intervalRouter.get('/get', authentication, getCurrentInterval);
intervalRouter.get('/get/all', authentication, getAllIntervals);
intervalRouter.post('/post', authentication, validateIntervalSchema, createInterval);
intervalRouter.put('/update/:id', authentication, (req,res)=> {res.status(200).send({});});
intervalRouter.delete('/delete/:id', authentication, (req,res)=> {res.status(200).send({});});

export default intervalRouter;
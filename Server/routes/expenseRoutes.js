import express from "express";
import authentication from "../middlewares/authentication";
import validateSchema from "../middlewares/validateSchema";
import expenseSchema from "../schemas/expenseSchema";

const expenseRouter = express.Router();
const expenseSchemaValidation = validateSchema(expenseSchema);

expenseRouter.get('/get' , authentication, () => {resizeBy.status(200).send({});})
expenseRouter.post('/add', authentication, expenseSchemaValidation, () => {resizeBy.status(200).send({});})
expenseRouter.put('/update/:id', authentication, () => {resizeBy.status(200).send({});})
expenseRouter.delete('/delete/:id' , authentication, () => {resizeBy.status(200).send({});})

export default expenseRouter;
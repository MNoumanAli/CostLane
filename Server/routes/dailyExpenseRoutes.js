import express from "express";
import authentication from "../middlewares/authentication";

const dailyExpenseRouter  = express.Router();

dailyExpenseRouter.get('/get', authentication, () => {resizeBy.status(200).send({});});
dailyExpenseRouter.get('/get/:id', authentication, () => {resizeBy.status(200).send({});});
dailyExpenseRouter.post('/add', authentication, () => {resizeBy.status(200).send({});});
dailyExpenseRouter.delete('/delete/:id', authentication, () => {resizeBy.status(200).send({});});
dailyExpenseRouter.delete('/delete/all', authentication, () => {resizeBy.status(200).send({});});

export default dailyExpenseRouter
import dailyExpense from "../models/dailyExpense";

export const getDailyExpenseByCurrentDateByIntervalID = async (intervalId) => {
    try {
        const currentDate = new Date();
        const activeDailyExpense = await dailyExpense.findOne({
            date : currentDate,
            intervalId : intervalId,
        });
        return activeDailyExpense;
    } catch (error) {
        throw error;
    }
};

export const getAllDailyExpenseByIntervalId = async (intervalId) => {
    try {
        const allDailyExpenses = await dailyExpense.find({intervalId : intervalId});
        return allDailyExpenses;
    } catch (error) {
        throw error;
    }
};

export const createDailyExpenseByIntervalId = async (intervalId) => {
    try {
        const newDailyExpense = new dailyExpense({intervalId : intervalId});
        const savedDilyExpense = await newDailyExpense.save();
    } catch (error) {
        throw error;
    }
};

export const deleteDailyExpenseById = async (id) => {
    try {
        const deletedItems = await dailyExpense.deleteOne({_id : id});
        return deletedItems;
    } catch (error) {
        throw error;
    }
};
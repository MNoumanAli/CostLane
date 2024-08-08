import expense from '../models/expense.js'

const getExpenseById = async (id) => {
    try {
        const data = await expense.findById({id});
        return data;
    } catch (error) {
        throw error;
    }
};

const getExpenseByIds = async (ids) => {
    try {
        const data = await expense.find({ _id: { $in: ids } });
        return data;
    } catch (error) {
        throw error;
    }
};

const createNewExpense = async (cost, item) => {
    try {
        const newExpense = new expense({
            cost : cost,
            item : item,
        });
        return newExpense;
    } catch (error) {
        throw error;
    }
};

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

const deleteExpenseById = async (id) => {
    try {
        const deletedItem = await expense.findByIdAndDelete(id);
        return deletedItem
    } catch (error) {
        throw error;
    }
}

const deleteExpenseByIds = async (id) => {
    try {
        const deletedItems = await expense.deleteMany({_id : { $in : id}});
        return deletedItems;
    } catch (error) {
        throw error;
    }
};

const updateExpenseCostById = async (id, cost) => {
    try {
        const updatedItem = expense.updateOne({_id,id}, {cost : cost});
        return updatedItem;
    } catch (error) {
        throw error;
    }
};

const updateExpenseItemById = async (id, item) => {
    try {
        const updatedItem = expense.updateOne({_id,id}, {item : item});
        return updatedItem;
    } catch (error) {
        throw error;
    }
}
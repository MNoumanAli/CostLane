import interval from "../models/interval"

export const getActiveInterval = async (userId) => {
    try {
        const currentInterval = await interval.findOne({isActive : true, userId : userId});
        return currentInterval;
    } catch (error) {
        throw error;
    }
};

export const getAllUserIntervals = async () => {
    try {
        const allIntervals = await interval.find();
        return allIntervals;
    } catch (error) {
        throw error;
    }
};

export const createNewInterval = async (userId, ) => {
    try {
        const newInterval = new interval({
            userId : userId,
        })
        const saveInterval = await newInterval.save();
    } catch (error) {
        throw error;
    }
};

export const deleteUserIntervalById = async (intervalId) => {
    try {
        await interval.deleteOne({_id : intervalId});
        return true;
    } catch (error) {
        throw error;
    }
}
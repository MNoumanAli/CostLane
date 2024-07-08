import { createNewInterval, getActiveInterval, getAllUserIntervals } from "../services/intervalService"

export const getCurrentInterval = async (req, res) => {
    try {
        const interval = await getActiveInterval(req.userId);
        res.status(200).send({
            data : interval,
        })
    } catch (error) {
        res.status(500).send({
            errors : "Interval Server Error",
            message : error.message,
        });   
    }
};

export const createInterval = async (req, res) => {
    try {
        const interval = await createNewInterval(req.userId);
        res.status(200).send({
            interval : interval,
        })
    } catch (error) {
        res.status(500).send({
            errors : "Interval Server Error",
            message : error.message,
        });
    }
};

export const getAllIntervals = async (req, res) => {
    try {
        const allIntervals = await getAllUserIntervals(req.userId);
        res.status(200).send({
            intervals : allIntervals,
        })
    } catch (error) {
        res.status(500).send({
            errors : "Interval Server Error",
            message : error.message,
        });
    }
}
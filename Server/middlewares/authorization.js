import jwt from 'jsonwebtoken'

const authorization = async (req,res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token)
        {
            const verifiedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if(verifiedData)
            {
                req.userId = verifiedData.Id;
                next();
            }
            else
            {
                res.status(400).send("Your are not authorized");
            }
        }
        else
        {
            res.status(400).send("Invalid Request");
        }
    } catch (error) {
        res.status(400).send(err.message);
    }
}

export default authorization;
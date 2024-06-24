import jwt from 'jsonwebtoken'

const authentication = async (req,res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token)
        {
            const verifiedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
                if(err) res.sendStatus(403);
                req.userId = user.Id;
                next()
            });
            
        }
        res.sendStatus(401);
    } catch (error) {
        res.status(400).send(err.message);
    }
}

export default authentication;
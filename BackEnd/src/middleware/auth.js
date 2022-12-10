// Check for a token and header

const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET } = process.env;


module.exports = (req, res, next) => {
    // get token from header
    const token = req.header("Authorization")

    // check if token doesnt exist
    if (!token){
        return res.status(401).json({
            message: "No Token, Authorization denied"
        })
    }

    // else...
    try {
        const decoded = jwt.verify(token, SECRET);

        // assign user to request object
        req.user = decoded.user
        
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid Token"
        })
    }
}
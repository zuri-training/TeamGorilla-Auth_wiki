const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');


const checkIfLoginedIn = asyncHandler( async (req, res, next) => {

    if (!req.session || !req.session.userId) {
        return res.status(403).json({
            success: false,
            message: "Login Required"
        });
    }

    req.user = await User.findById(req.session.userId); 

    if (!req.user) {
        return res.status(403).json({
            success: false,
            nessage: "Session Expired... Login Again"
        });
    }
    next();
})

module.exports = {
    checkIfLoginedIn
}
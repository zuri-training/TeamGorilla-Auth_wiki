const User = require("../models/User");
const bcrypt = require("bcrypt");


const createUser = async (req, res) => {
    try {
        let request = await req.body;
        const salt = await bcrypt.genSalt(10);

        console.log(request);
        console.log(req.body.password);
        let hashedPassword = await bcrypt.hash(req.body.password, salt); 

        let user = {
            fullName: request.fullName,
            email: request.email,
            password: hashedPassword,
            userRole: request.userRole,
            isAuthenticated: request.isAuthenticated,
            isActive: request.isActive
        }
        
        let createdUser = await User.create(user);

        if (!createdUser) return res.status(404).json({
            status: 'failed',
            message: 'user Creation failed'
        });

        return res.status(201).json({
            status: 'success',
            message: 'User Created Successful',
            user: createdUser
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: 'internal matters',
            error: err.message
        });
    }
};


loginUser = async (req, res) => {
    
}

module.exports = {
    createUser
}
const User = require("../models/User");
const bcrypt = require("bcrypt");


const createUser = async (req, res) => {
    try {
        let request = await req.body;

        const checkUserEmail = await User.findOne({ email: request.email });

		if (checkUserEmail)
			return res
				.status(409)
				.json({ status: 'success', message: "User with given email already Exist!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password, salt); 

        await new User({ ...req.body, password: hashedPassword }).save();

            return res.status(201).json({
                status: 'success',
                message: 'User Created Successful'
        });
    }catch(err){
            res.status(500).json({
                status: false,
                message: 'internal error',
                error: err.message
        });
    }
};


const userLogin = async (req, res) => {
    try{
        const userToAuth = await User.findOne({email: req.body.email}); 
        if (!userToAuth)
                return res.status(401).json({ status: 'failed', message: "Invalid Email or Password" });

        const validPassword = await bcrypt.compare(
                    req.body.password,
                    userToAuth.password
        );

        if (!validPassword)
			return res.status(401).json({  status: 'failed', message: "Invalid Email or Password" });
        
        return res.status(200).json({
                status: 'success',
                message: "logged in successfully", 
                data : {
                    user: userToAuth
                }
        });
    }catch(err) {
        res.status(500).json({
            status: false,
            message: 'internal error',
            error: err.message
    });
    }
}

module.exports = {
    createUser,
    userLogin
}
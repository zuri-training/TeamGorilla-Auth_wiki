const User = require("../models/User");
const bcrypt = require("bcrypt");


const createUser = async (req, res) => {
    try {
        let request = await req.body;

        const checkUserEmail = await User.findOne({ email: request.email });

		if (checkUserEmail)
			return res
				.status(409)
				.json({ message: "User with given email already Exist!" });

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
                message: 'internal matters',
                error: err.message
        });
    }
};


userLogin = async (req, res) => {
    const userToAuth = await User.findOne(req.body.email);     
}

module.exports = {
    createUser
}
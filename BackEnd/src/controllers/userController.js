const User = require("../models/userModel");
const crypto = require('crypto');
const { validationResult } = require("express-validator");
const { generateToken } = require("../middleware/authMiddleware")
const asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');
const { sendEmail } = require('../utils/sendMail');


/**
 * @desc Register User 
 * @route POST
 * @route /api/user/register
 * @access Public
 */
const registerUser = asyncHandler( async (req, res) => {
    // validate request --- express-validator
    const validationError = validationResult(req);
    if(!validationError.isEmpty()) {
        res.status(400)
        throw new Error(validationError.array()[0].msg)
            
        }
    try{

        const {firstName, lastName, email, password} = req.body
        
        const verifyToken = uuidv4();

        const userExist = await User.findOne({ email })
        if (userExist) {
			res.status(403);
			throw new Error('User already Exists');
		}
        const user = await User.create({
			firstName,
			lastName,
			email,
			password,
			verificationCode: verifyToken,
		});

		if (user) {
			const text = `<h1>Email Confirmation</h1>
        <h2>Hello ${firstName}</h2>
        <p>Verify your email address to complete the signup and login to your account to Authwiki</p>
        <a href='https://auth-wiki.onrender.com/api/user/register/${user.verificationCode}'> Click here</a>

        </div>`;

			await sendEmail({
				email: user.email,
				subject: 'Email Verification',
				message: text,
			});

			res.status(201).json({
                success: true,
			});
		}
	} catch (error) {
		res.status(404);
		throw new Error(error.message);
	}
});


const verifyAccount = asyncHandler(async (req, res) => {
	try {
		const code = req.params.code;
		// compare the confimation code

		const verifyUser = await User.findOne({ verificationCode:code });

		if (!verifyUser) {
			res.status(404);
			throw new Error('User not found');
		} else {
			verifyUser.isVerified = true;
			await verifyUser.save();
// 			res.status(200).json({
//                 success: true,
// 				message: 'Verification Successful. You can login now',
// 				//isVerified: verifyUser.isVerified,
//                 user: verifyUser
// 			});
			res.redirect('https://auth-wiki-leroicodes.vercel.app/login')
		}
	} catch (error) {
		res.status(500);
		throw new Error(error.message);
		
	}
});
const try1 = asyncHandler(async (req, res) => {
	const id =  req.params.id;
	res.status(201).json({
		id
	})

})

/**
 * @desc Login a user
 * @route POST
 * @route /api/user/login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {

    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
        res.status(400)
        throw new Error(validationError.array()[0].msg)
        
    }
    const { email, password } = req.body;

	// Check for user
	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		res.status(401);
		throw new Error('Invalid Credentials');
	}

	// check if password matches
	const isMatch = await user.matchPassword(password);

	if (!isMatch) {
		res.status(401);
		throw new Error('Invalid Credentials');
	}

	if (user.isVerified === false) {
		res.status(401);
		throw new Error(
			'Your Account is not Verified. Please Verifiy Your Account'
		);
	}
	
	res.status(200).json({
		success: true,
		access_token: generateToken(user.id),
	});
});

const getAllUsers = asyncHandler( async (req, res) => {
	let users;
	users = await User.find();
	if(users === []){
		res.status(500)
		throw new Error('what is wrong')
	}
	res.status(200).json({
		users
	})
})

/**
 * @desc Get user profile
 * @route POST
 * @route /api/user/me
 * @access Private/User
 */
const getUser = asyncHandler(async (req, res) => {

    try {
        const user = await User.findById(req.user.id);

        if(!user){
            res.status(404)
            throw new Error('User not found')
        }
        res.status(200).json({
            success: true,
            // user: user,
        }); 
        
    } catch(err){
        res.status(500)
        throw new Error(err.message)
    }
});


/**
 * @desc Update a user
 * @route POST
 * @route /api/user/login
 * @access Public
 */
const updateUser= asyncHandler(async (req, res) => {
	const { firstName, lastName } = req.body;

	try {
		const user = await User.findById(req.user._id);

		if (user) {
			user.firstName = firstName || user.firstName;
			user.lastName = lastName || user.lastName;
		}

		const updatedUser = await user.save();

		return res.json({
			success: true,
			_id: updatedUser._id,
			firstName: updatedUser.firstName,
			lastName: updatedUser.lastName,
		});
	} catch (error) {
		res.status(404);
		throw new Error('User not found');
	}
});

/**
 * @desc Forgot Password
 * @route POST
 * @route /api/user/forgotpassword
 * @access Public
 */


const forgotPassword = asyncHandler(async (req, res) => {
	const user = await User.findOne({ email: req.body.email });

	if (!user) {
		res.status(404);
		throw new Error('There is no user with that email');
	}

	// Get reset token
	const resetToken = user.getResetPasswordToken();

	await user.save({ validateBeforeSave: false });

	// create message to pass
	const text = `<h1>Password Reset Link</h1>
        <h2>Hello ${user.firstName}</h2>
        <p>You are receiving this email because you (or someone else) has
         requested the reset of a password</p>
           <a href='https://auth-wiki-leroicodes.vercel.app/reset'> Click here to reset your password</a>

        </div>`;
			//change to app reset page
	try {
		await sendEmail({
			email: user.email,
			subject: 'Password reset token',
			message: text,
		});

		res.status(200).json({
			success: true,
			message: 'Email sent',
			resetToken
		});
	} catch (error) {
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save({ validateBeforeSave: false });

		res.status(500);
		throw new Error('Email could not be sent');
	}
});

/**
 * @desc Reset User password
 * @route PUT
 * @route /api/user/resetpassword/:resettoken
 * @access Public
 */
const resetPassword = asyncHandler(async (req, res) => {
	//  Get hased token
	const resetPasswordToken = crypto
		.createHash('sha256')
		.update(req.body.resetToken)
		.digest('hex');

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});

	if (!user) {
		res.status(400);
		throw new Error('Invalid token');
	}

	// ?set new password
	user.password = req.body.password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;

	await user.save();

	return res.status(200).json({
        success: true,
		messsage: 'Password Reset Successfully. Please Login with your new password',
	});
});

module.exports = {
    registerUser,
    verifyAccount,
    loginUser,
    getUser,
    updateUser,
    forgotPassword,
    resetPassword,
	getAllUsers
}

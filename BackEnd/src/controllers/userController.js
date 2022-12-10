const User = require("../models/User");

const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const connectDB = require("../database");
const { db } = require("../models/User");

const { SECRET } = process.env;


// @route       POST api/login
// @desc        Authenticate users(admin, user)
exports.loginUser = async (req, res) => {
    // Check for errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
       return res.status(400).json({
            error: error.array()[0].msg
        })
    }

    // Else, deconstruct request body
    const { email, password } = req.body;

    try {
        // initialize user
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        // Check for password
        const isMatch =  bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        // else, theres a match
        // send payload and signed token
        const payload = {
            id: user.id
        };

        jwt.sign(payload, SECRET, {
            expiresIn: 86400
        }, (error, token) => {
            if(error) throw error;

            res.status(200).json({
                message: "logged in successfully ",
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    userRole: user.userRole,

                },
                token
            })
        })
    } catch (error) {
        console.error(error.message)

        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


// @route       POST api/register
// @desc        creating new users
exports.registerUser = async (req, res) => {

    // validate request --- express-validator
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json({
            error : error.array()[0].msg
        })
    }

    // else, deconstruct req.body
    const {firstName, lastName, email, password, isActive, isAuthenticated} = req.body;

    // Check if User doesn't exist in the database
    const user = await User.findOne({email});

    if(user) {
        return res.status(400).json({
            message : "User with this email already exists"
        })
    }

    try {
       const user =  User.create({
            firstName,
            lastName,
            email,
            password,
            isActive,
            isAuthenticated
       });

       res.status(201).json({
            message : "user created successfully",
            user
       })

   } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error : error.message
        })
    }
}
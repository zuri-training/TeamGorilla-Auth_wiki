const User = require("../models/User");
const bcrypt = require("bcrypt");
const Comments = require("../models/Comments");

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

const createComment = async (req, res) => {
    try{
        const body = await req.body;
        const userId = req.user.id;

        const comment = await Comments.create({
            body: body,
            author: userId,

        });
        if(comment){
            const createdComment = await comment.save();
            res.status(201).json({
                success: true,
                comment: createdComment
            })
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
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
const like = async (req, res) =>{
    try{
    const userId = req.user.id
    const commentId = req.params.id
    const comment = Comments.find({
        id: commentId
    })
    if(!comment){
        res.status(404).json({
            success: false,
            message: `comment with id ${commentId}not found`
        })
    }
    else{
        if(comment.like.includes(userId)){
            res.status(200).json({
                success: false,
                message: "User already liked comment"
            })
        }
        comment.like.push(userId)
    }
}catch(err){
    res.status(500).json({
        success: false,
        message: err.message
    })
}
}

const unLike = async (req, res) =>{
    try{
         const userId = req.user.id
         const commentId = req.params.id
         const comment = comments.find({
            id: commentId
         })
         if(comment){
            res.status(201).json({
                success: true,
                message: unlike
            })
         }
         comment.unlike.push(userId)
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {
    registerUser,
    createComment,
    like,
    unLike,
    loginUser
}

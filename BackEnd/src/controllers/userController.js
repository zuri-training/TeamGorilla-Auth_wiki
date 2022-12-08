const User = require("../models/User");
const bcrypt = require("bcrypt");
const Comments = require("../models/Comments");


const createUser = async (req, res) => {
    try {
        let request = await req.body;

        console.log(request);
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password)

        console.log(hashedPassword);

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

loginUser = async (req, res) => {
    
}

module.exports = {
    createUser,
    createComment,
    like,
    unLike
}

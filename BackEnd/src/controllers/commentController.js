
const Comment = require("../models/commentModel");




const createComment = async (req, res) => {
    try{
        const body = await req.body;
        const userId = req.user.id;
        const docId = req.params.id

        const comment = await Comment.create({
            body: body,
            author: userId,
            documentation_id: docId

        });
        if(comment){
            const createdComment = await comment.save();
            res.status(201).json({
                success: true,
                comment: createdComment
            })
        }
    }catch(err){
        res.status(500)
        throw new Error(err.message)
    }
}

const like = async (req, res) =>{
    try{
    const userId = req.user.id
    const commentId = req.params.id
    const comment = Comment.find({
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
    createComment,
    like,
    unLike,
}
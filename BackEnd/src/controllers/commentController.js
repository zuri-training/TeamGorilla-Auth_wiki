const Cmts = require("../models/commentModel");

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");



/**
 * @desc Create Comment
 * @route post
 * @route /api/comment
 * @access Public
*/


const createComment =  asyncHandler( async (req, res) => {

    try{
        
        const author = req.user.id;
        const documentationID = req.params.id;


        const comment = await Cmts.create({
            body: req.body,
            author: userId,
            documentation_id: docId
        });
        
        if(comment) {
            res.status(201).json({
                success: true,
                message: "Comment Created",
                comment
            })
        }
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});



/**
 * @desc Like and Dislike Comment
 * @route PATCH
 * @route /api/comment/id
 * @access Public
*/


const commentReaction = asyncHandler( async (req, res) => {
    // Like and Unlike routes
    try {
        // get comment id from request parameter
        const { id } = req.params;

        // check if comment exists
        const comment = await Cmts.findOne(id);
    if(!comment){
        res.status(404).json({
            success: false,
            message: `comment with id ${commentId} not found`
        })
    }
    else{
        if(comment.like.includes(userId)){
            res.status(200).json({
                success: false,
                message: "Comment not found"
            })
        };

        // if comment exists
        // Get reation from request body
        const reaction = await req.body;

        // fetch user_id
        const user = req.user.id;

        // if user likes comment
        if(reaction === "like") {
            // check if user has liked before
            const checkLike = comment.liked.includes(user);
            if(checkLike) {
                // check the index of the user
                const idx = comment.liked.indexOf(user);

                // remove the like
                comment.liked.splice(idx, 1);

                return res.status(200).json({
                    success: true,
                    message: "Successfully Unliked"
                })
            }else {
                // add like since user hasn't liked before
                comment.liked.push(user);

                return res.status(200).json({
                    success: true,
                    message: "Liked Successfully"
                });
            }
        }

        // if user dislikes comment
        if(reaction === "dislike") {
            // check if user has disliked before
            const checkLike = comment.unliked.includes(user);
            if(checkLike) {
                // check the index of the user
                const idx = comment.unliked.indexOf(user);

                // remove the dislike
                comment.unliked.splice(idx, 1);

                return res.status(200).json({
                    success: true,
                    message: "Successfully Un-disliked"
                })
            } else{
                // add dislike since user hasn't disliked before
                comment.unliked.push(user);

                return res.status(200).json({
                    success: true,
                    message: "Disliked Successfully"
                })
            }
        }

    } 
}catch (error) {
    res.status(500)
    throw new Error(error.message);
}
});



module.exports = {

    createComment,
    commentReaction

}
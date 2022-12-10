const { ObjectId } = require("bson");
const mongoose = require("mongoose");

// create comments schema 
const CommentSchema = mongoose.Schema(
    {
        message: {
            type: String
        },
        user_id: {
            type: ObjectId,
            required: true,
            ref: 'User'
        },
        documentation_id: {
            type: ObjectId,
            required: true,
            ref: 'Documentation'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Comments", CommentSchema);

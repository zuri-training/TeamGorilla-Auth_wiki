const {Schema, model} = require('mongoose');

const commentSchema = new Schema (
    {
        body: {
            type: String,
            required: true
        },
        author: {
            type: objectID,
            ref: "User"
        },    
        Like: [{ type: objectID, ref: "User" }],
    },
    {timestamps: true},
);

const commentModel = model('Comment', commentSchema);

module.exports = commentModel;
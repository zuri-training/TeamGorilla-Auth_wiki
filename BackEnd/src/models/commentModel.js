const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const commentSchema = new Schema (
    {
        body: {
            type: String,
            required: true
        },

        author: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },    
        liked: {
            type:[String],
            default:[]
        },
        unliked: {
            type:[String],
            default:[]
        },
        author: {
            type: mongoose.Schema.Types.ObjectID, ref: 'user'
        },
        documentationID: {
            type: mongoose.Schema.Types.ObjectID, ref: 'documentation'
        }
    },

    {timestamps: true},
);

const commentModel = model('Comment', commentSchema);

module.exports = commentModel;
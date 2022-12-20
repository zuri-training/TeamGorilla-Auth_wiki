
const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const tempCommentSchema = new Schema (
    {
        body: {
            type: String,
            required: true
        },   
        author: {
            type: String
        },
    },

    {timestamps: true},
);

const tempCommentModel = model('Comment', tempCommentSchema);

module.exports = tempCommentModel;
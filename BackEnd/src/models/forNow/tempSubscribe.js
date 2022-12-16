const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const tempSubscribeSchema = new Schema (
    {
        email: {
            type: String,
            required: true
        },
    },

    {timestamps: true},
);

const tempSubscribeModel = model('Subscribe', tempSubscribeSchema);

module.exports = tempSubscribeModel;
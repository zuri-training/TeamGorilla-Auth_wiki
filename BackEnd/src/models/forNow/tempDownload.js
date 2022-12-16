const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const tempDownloadSchema = new Schema (
    {
        download: {
            type:String,
            required: true
        },
    },

    {timestamps: true},
);

const tempDownloadModel = model('Download', tempDownloadSchema);

module.exports = tempDownloadModel;
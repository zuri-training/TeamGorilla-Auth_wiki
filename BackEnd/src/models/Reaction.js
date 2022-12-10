const { ObjectId } = require("bson");
const mongoose = require("mongoose");

// create reaction schema
const ReactionSchema = mongoose.Schema(
    {
        isLiked: {
            type: Boolean
        },
        user_id: {
            type: ObjectId,
            required: true,
            ref: 'User'
        },
        document_id: {
            type: ObjectId,
            required: true,
            ref: 'Documentation'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Reaction", ReactionSchema);
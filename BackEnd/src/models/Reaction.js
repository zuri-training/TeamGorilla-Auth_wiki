const { ObjectId } = require("bson");
const mongoose = require("mongoose");

// create reaction schema
const ReactionSchema = mongoose.Schema(
    {
        isLiked: {
            type: Boolean
        },
    },

);

module.exports = mongoose.model("Reaction", ReactionSchema);
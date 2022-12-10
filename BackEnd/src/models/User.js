const mongoose = require("mongoose");

// Create user Schema
const UserSchema = mongoose.Schema(
    {
        // Defining properties of the application user
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: 0
        },
        isAuthenticated: {
            type: Boolean,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema)
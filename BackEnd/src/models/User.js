
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
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        userRole: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        isAuthenticated: {
            type: Boolean
        },
        isActive: {
            type: Boolean
        }
    },
    {timestamps: true},
);

module.exports = mongoose.model("User", UserSchema)

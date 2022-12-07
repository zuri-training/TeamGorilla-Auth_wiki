const {Schema, model} = require('mongoose');

const userSchema = new Schema (
    {
        fullName: {
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

const userModel = model('users', userSchema);

module.exports = userModel;
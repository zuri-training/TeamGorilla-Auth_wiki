const {Schema, model} = require('mongoose');
const jwt = require("jsonwebtoken");

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

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {expiresIn:"7d"});
    return token;
}



const userModel = model('users', userSchema);

module.exports = userModel;
const Comment = require('../../models/forNow/tempComment')
const Subscribe = require('../../models/forNow/tempSubscribe')
const Download = require('../../models/forNow/tempDownload')
// const { validationResult } = require("express-validator");
const asyncHandler = require('express-async-handler');



const createDownload = asyncHandler( async (req, res) => {
    const filePath = __dirname + "/public/assets/authMiddleware.js" ;
    res.download(
        filePath, 
        "authMiddleware.js", // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error : err,
                    msg   : "Problem downloading the file"
                })
            } else{
                const down = Download.create({
                    download: 'true'
                })
            }
    });
})

const getNumberDownloads = asyncHandler( async (req, res) =>{
    try{
        const downloads = await Download.find();
    res.status(200).json({
        success: true,
        downloads: downloads.length
    })
}catch(err){
    res.status(500)
    throw new Error('something went wrong')
}
 })

 const createComment = asyncHandler( async (req, res) => {
    const comment = req.body.comment
    const {firstName, lastName} = req.user
    try {
        const newComment = await Comment.create({ 
            author: firstName + " " + lastName,
            body: comment
        })
        res.status(201).json({
            success: true,
        })
    } catch(err) {
        res.status(500)
        throw new Error(err.message)
    }
 })

 const getAllComments = asyncHandler( async (req, res) => {
    try{
        const comments = await Comment.find().sort({$natural:-1}).limit(3)
        res.status(201).json({
            success: true,
            comments
        })

    } catch(err){
        res.status(500)
        throw new Error(err.message)
    }
 })

 const getAllCommentsNumber = asyncHandler( async (req, res) => {
    try{
        const comments = await Comment.find()
        res.status(201).json({
            success: true,
            length: comments.length
        })
    } catch (err){
        res.status(500)
        throw new Error(err.message)
    }
 })

 const createSubscribe = asyncHandler( async (req, res) => {
    const {email} = req.body
    try{
        const newSubscribed = Subscribe.create({
            email
        })
        res.status(201).json({
            success: true,
        })
    } catch(err) {
        res.status(500)
        throw new Error(err.message)
    }
 })


 module.exports = {
    createDownload,
    createSubscribe,
    createComment,
    getAllComments,
    getNumberDownloads,
    getAllCommentsNumber,
 }
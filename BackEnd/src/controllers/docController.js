const Doc = require("../models/docModel");
const asyncHandler = require('express-async-handler');


/**
 * @desc get all documentation
 * @route GET
 * @route /api/docs
 * @access Public
*/

const getAllDocs = asyncHandler( async (req, res) => {
    // get all documentations
    try {
        const docs = await Doc.find();

        const docFields = [];

        docs.map((i) => {
            let doc = {
                title: i.title,
                shortDesc: i.shortDesc,
                liked : i.liked.length(),
                downloads: i.downloads.length(),
                _id: i._id
            }
            docFields.push(doc)
        });

        res.status(200).json({
            success: true,
            docFields
        });
    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
});


/**
 * @desc get a single documentation
 * @route GET
 * @route /api/docs/:id
 * @access Public
*/
const getSingleDoc = asyncHandler( async (req, res) => {
    // get document by ID
    try {
        const { id } = req.params
        const doc = await Doc.findOne(id);

        if(!doc) {
            return res.status(400).json({
                success: false,
                message: "Documentation not found!"
            })
        }

        res.status(200).json({
            success: true,
            message: "Documentation Found",
            doc
        });

    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
});


/**
 * @desc download a single documentation
 * @route GET
 * @route /api/docs/download/:id
 * @access Public
*/

const downloadDoc = asyncHandler( async (req, res) => {
    // to download a documentation
    try {
        // get id from request parameter
        const { id } = req.params;

        // check  if document exists
        const doc = await Doc.findOne(id);

        if(!doc) {
            return res.status(400).json({
                success: false,
                message: "Document not found"
            })
        }

        // fetch the download link from database
        const downloadLink = doc.docLink;

        res.status(200).json({
            success: true,
            message: "Documentation Found",
            downloadLink
        })

        
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
});



/**
 * @desc Like and Dislike documentations
 * @route PATCH
 * @route /api/docs/reaction
 * @access Public
*/

const docReaction = asyncHandler( async (req, res) => {
    // Like and Dislike routes
    try {
        // get id from request parameter
        const { id } = req.params;

        // check  if document exists
        const doc = await Doc.findOne(id);

        if(!doc) {
            return res.status(400).json({
                success: false,
                message: "Documentation not found"
            })
        };


        // get reaction from request body
        const { reaction } = req.body;

        // fetch user id
        const user = req.user.id;

        // if the user likes
        if(reaction === "like") {
            const checkLike = doc.liked.includes(user);
            if(checkLike) {
                const idx = doc.liked.indexOf(user);
                doc.liked.splice(idx, 1);

                return res.status(200).json({
                    success: true,
                    message: "Successfully Unliked!"
                })

            } else{
                doc.liked.push(user);

                return res.status(200).json({
                    success: true,
                    message: "Liked Successfully!"
                });
            }
        }

        // if the user dislikes
        if (reaction === "dislike") {
            const checkLike = doc.unlike.includes(user);
            if(checkLike) {
                const idx = doc.unlike.indexOf(user);
                doc.unlike.splice(idx, 1);

                return res.status(200).json({
                    success: true,
                    message: "Successfully Un-disliked!"
                })

            }else {
                doc.unlike.push(user);
                
                return res.status(200).json({
                    success: true,
                    message: "disliked Successfully!"
                });
            }
        }

    } catch (error) {
        res.status(500)
        throw new Error(error.message);
    }
    
});



module.exports = {
    getAllDocs,
    getSingleDoc,
    downloadDoc,
    docReaction
}
const Doc = require("../models/docModel");
const asyncHandler = require('express-async-handler');


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

const getSingleDoc = asyncHandler( async (req, res) => {
    // get document by ID
    try {
        const { id } = req.params
        const doc = Doc.findOne(id);

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
})




module.exports = {
    getAllDocs,
    getSingleDoc
}
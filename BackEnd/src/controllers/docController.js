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

// const getDocById = 




module.exports = {
    getAllDocs
}
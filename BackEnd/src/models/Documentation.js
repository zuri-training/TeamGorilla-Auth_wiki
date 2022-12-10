const mongoose = require("mongoose");

// create the documentation schema
const DocumentationSchema = mongoose.Schema(
    {
        text: {
            type: String
        },
        codeSnippet: {
            type: String
        }
    }
);

module.exports = mongoose.model("Documentation", DocumentationSchema);
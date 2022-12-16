const mongoose = require("mongoose");

// create the documentation schema
const DocumentationSchema = mongoose.Schema(
    {
        title: {
            type: String
        },
        subTitle: {
            type: String
        },
        shortDesc: {
            type: String
        },
        longDesc: {
            type: String
        },
        installDesc: {
            type: String
        },
        envDesc: {
            type: String
        },
        controllerDesc: {
            type: String
        },
        routeDesc: {
            type: String
        },
        licenseDesc: {
            type: String
        },
        downloads: {
            type: [String],
            default: []
        },
        liked: {
            type: [String],
            default: []
        },
        unlike: {
            type: [String],
            default: []
        },
        docLink: {
            type: String
        }
    }
);

module.exports = mongoose.model("Documentation", DocumentationSchema);
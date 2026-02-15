const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    post_image: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("posts", postSchema);
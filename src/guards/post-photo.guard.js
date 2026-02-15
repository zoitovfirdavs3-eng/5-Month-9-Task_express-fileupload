const app = require("converter-mb");
const path = require("node:path");
const { globalError, ClientError } = require("shokhijakhon-error-handler");
const { v4 } = require("uuid");

module.exports = (req, res, next) => {
    const allowedFormats = [".png", ".jpg", ".jpeg"];
    const allowedFileSize = 5;
    try{
        if(!req.files) return next();
        let postImage = req.files?.post_image;
        let currentImageExt = path.extname(postImage.name)
        if(!allowedFormats.includes(currentImageExt)) throw new ClientError('Invalid image format', 415);
        const currentFileSize = app.byte(postImage.size);
        if(allowedFileSize < currentFileSize) throw new ClientError('Image size too large. Maximum (5mb)', 413);
        req.filename = v4() + postImage.name;
        next();
    }catch(err){
        return globalError(err, res)
    }
}
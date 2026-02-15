const { Router } = require("express");
const postController = require("../controllers/post.controller");
const postPhotoGuard = require("../guards/post-photo.guard");

const postRouter = Router();

postRouter.post("/create", postPhotoGuard, postController.CREATE);

module.exports = postRouter;
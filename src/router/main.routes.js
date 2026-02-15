const { Router } = require("express");
const postRouter = require("./post.routes");

const mainRouter = Router();

mainRouter.use("/posts", postRouter);

module.exports = mainRouter;
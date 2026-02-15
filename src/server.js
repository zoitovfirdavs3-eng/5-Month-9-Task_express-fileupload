require("dotenv").config();
const path = require("node:path");
const express = require("express");
const mainRouter = require("./router/main.routes");
const dbConnection = require("./lib/db.service");
const fileUpload = require("express-fileupload");

dbConnection().catch(() => process.exit(1));

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use( "/photos", express.static( path.join( process.cwd(), "uploads", "postPhotos" ) ) ),

app.use("/api", mainRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}-port`));
import express from "express";
import upload from "../middleware/multer.middleware.js";

const fileUploader = express.Router();

fileUploader.post("/", upload.single("file"), (req, res) => {
    console.log("File uploaded");
    res.json({ message: "File uploaded Succesfully!" });
});

export default fileUploader;
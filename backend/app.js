import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.js";
import fileUploader from "./routes/uploadFile.js";
import movieGet from "./routes/getMovies.js";
// Configuring environment variables file location (.env file I am talking about!)
dotenv.config();

// Mongoose Setup
const mongoURI = process.env.MONGODB_URI;
// const ORIGIN = process.env.FRONTEND;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(" Succcessfully Connected! ");
    })
    .catch((error) => {
        console.log("MongoDB connection error : ", error);
    });
// Ends here


const app = express();
const PORT = 3000;

const ORIGIN = process.env.FRONTEND;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", ORIGIN);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);  // <- preflight
  next();
});
// To parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public/videos", express.static("/videos"));
app.use("/public/images", express.static("/images"));


// All routes
app.use("/", router);
app.use("/upload", fileUploader);
app.use("/getMovies", movieGet);


// Listening on Port 3000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

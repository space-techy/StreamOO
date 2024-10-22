import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.js";
import fileUploader from "./routes/uploadFile.js";

// Configuring environment variables file location (.env file I am talking about!)
dotenv.config();

// Mongoose Setup
const mongoURI = `mongodb://mongodb/StreamOO`;
console.log(mongoURI);

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


// CORs use for localhost api request
app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    preflightContinue: false,
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));


// To parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public/videos", express.static("./public/videos"));


// All routes
app.use("/", router);
app.use("/upload", fileUploader);


// Listening on Port 3000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

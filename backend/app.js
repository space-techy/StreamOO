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

app.options("*", cors());

// To parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public/videos", express.static("./public/videos"));
app.use("/public/images", express.static("./public/images"));


// All routes
app.use("/", router);
app.use("/upload", fileUploader);
app.use("/getMovies", movieGet);


// Listening on Port 3000
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

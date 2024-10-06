import express from "express";
import cors from  "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.js";


// Configuring environment variables file location (.env file I am talking about!)
dotenv.config();

const mongoURI = `mongodb://mongodb/StreamOO`;
console.log(mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log(" Succcessfully Connected! ");
})
.catch((error)=>{
    console.log("MongoDB connection error : ",error);
});


const app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});

// To parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORs use for localhost api request
app.use(cors({origin: "*"}));


app.use("/",router);

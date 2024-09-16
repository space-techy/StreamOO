import express from "express";
import router from "./routes/home.js";
const app = express();
const PORT = 3000;

app.use("/",router);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});
import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log("Listening on port : ", PORT);
});

app.get("/login",(req,res)=>{
    console.log("Here you have came here on login page!!")
});

app.get("/register",(req,res)=>{
    console.log("Here you have came here on Register page!!")
});
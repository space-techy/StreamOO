import express from "express";
import Movie from "../db/movieData.js";


const movieGet = express.Router();

movieGet.get("/", async (req, res) => {
    try {
        console.log("I am here gone bro!");
        const movies = await Movie.find({});
        console.log("I am here!")
        console.log(movies);
        res.status(200).json(movies);
    } catch {
        res.status(500).json({ message: "Error fetching movies", error });
    }
});


export default movieGet;
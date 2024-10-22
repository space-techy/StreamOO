import express from "express";
import Movie from "../db/movieData";


const movieGet = express.Router();

movieGet.get("/", async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch {
        res.status(500).json({ message: "Error fetching movies", error });
    }
});


export default movieGet;
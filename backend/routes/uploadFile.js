import express from "express";
import upload from "../middleware/multer.middleware.js";
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import { exec } from "child_process"; // watch out
import Movie from "../db/movieData.js";
import thumbUpload from "../middleware/multerThumb.middleware.js";

const fileUploader = express.Router();

fileUploader.post("/movieData", thumbUpload.fields([{ name: 'movieThumbnail', maxCount: 1 }]), async (req, res) => {
    try {
        console.log("Starting the upload process...");

        var { movieName, movieGenres, movieDescription, movieURL, movieCaste } = req.body;
        const movieThumbnail = req.files?.movieThumbnail ? req.files.movieThumbnail[0].buffer : null;
        // Check if thumbnail exists
        if (!movieThumbnail) {
            return res.status(400).json({ error: "Movie thumbnail is required" });
        }

        console.log("Parsed movie data:", { movieName, movieGenres, movieDescription, movieCaste, movieThumbnail });

        const videoURL = `http://localhost:3000/public/videos/$76124e5e-f02d-49b4-8acd-fc286a62e1d9/index.m3u8`;

        if (movieURL === "none") {
            movieURL = videoURL;
        }

        // Prepare the movie data object
        const MovieData = {
            movieName: movieName,
            movieGenre: movieGenres,
            movieDescription: movieDescription,
            movieCaste: movieCaste,
            movieThumbnail: movieThumbnail,
            movieURL: movieURL || videoURL,  // Fallback if no URL is provided
        };

        // Saving the movie data to the database
        const movieSave = new Movie(MovieData);
        console.log("Saving movie data to the database...");
        const movieSaveData = await movieSave.save();
        console.log("Saved to Database!");
        res.status(200).json({ message: "Movie uploaded successfully!" });
    } catch (error) {
        console.error("Error while saving movie:", error);
        res.status(500).json({ error: error.message });
    }
});




fileUploader.post("/", upload.fields([{ name: "movieVideo", maxCount: 1 }]), async (req, res) => {

    try {
        console.log("Video Uploaded Successfully Now going to chunks part!!")
        const videoId = uuidv4();
        const videoPath = req.files["movieVideo"][0].path;
        console.log("Video path is here", videoPath);
        const videoOutPath = `./public/videos/${videoId}`;
        const hlsPath = `${videoOutPath}/index.m3u8`;
        // .m3u8 is UTF-8 encoding type which makes file more easily transferrable and much easier to do work (research on it if you want to know more!)
        console.log("Working here!");
        // This creates the folder if it doesn't exists
        if (!(fs.existsSync(videoOutPath))) {
            fs.mkdirSync(videoOutPath, { recursive: true });
        }

        // This is ffmpeg command which helps in creating chunks of videos
        const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${videoOutPath}/movie%04d.ts" -start_number 0 ${hlsPath}`;

        console.log("Working here bro!");
        // This command executes the ffmpegcommand
        exec(ffmpegCommand, (error, stderr, stdout) => {
            if (error) {
                console.log("Error occured! Please look below for more info: \n", error);
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
        const videoURL = `http://localhost:3000/public/videos/${videoId}/index.m3u8`;
        console.log("hsj here!");
        res.status(200).json({ videoURL: videoURL });

    } catch (error) {
        console.log("Error here going back!");
        res.status(500).json({ error: error });
    }
});

export default fileUploader;
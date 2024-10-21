import express from "express";
import upload from "../middleware/multer.middleware.js";
import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import { exec } from "child_process"; // watch out
import Movie from "../db/movieData.js";

const fileUploader = express.Router();


fileUploader.post("/movieData", async (req, res) => {

    try {
        console.log("Here working on it!");
        console.log(req.body);
        const { movieName, movieGenres, movieDescription, movieURL, movieCaste } = req.body;
        const movieThumbnail = req.files["movieThumbnail"];
        console.log(movieThumbnail, movieName, movieGenres, movieDescription, movieURL, movieCaste);

        const MovieData = {
            movieName: movieName,
            movieGenre: movieGenres,
            movieDescription: movieDescription,
            movieCaste: movieCaste,
            movieThumbnail: movieThumbnail.buffer,
            movieURL: movieURL,
        }

        const movieSave = new Movie(MovieData);
        console.log("Working on saving now!");
        await movieSave.save();
        console.log("Saving done!");
        res.status(200);
    } catch (error) {
        res.status(500).json({ error: error });
    }

});



fileUploader.post("/", upload.fields([{ name: "movieVideo", maxCount: 1 }]), async (req, res) => {

    try {
        const movieVideo = req.files["movieVideo"];

        console.log("Video Uploaded Successfully Now going to chunks part!!")
        const videoId = uuidv4();
        const videoPath = req.file.path;
        const videoOutPath = `./public/videos/${videoId}`;
        const hlsPath = `${videoOutPath}/index.m3u8`;
        // .m3u8 is UTF-8 encoding type which makes file more easily transferrable and much easier to do work (research on it if you want to know more!)

        // This creates the folder if it doesn't exists
        if (!(fs.existsSync(videoOutPath))) {
            fs.mkdirSync(videoOutPath, { recursive: true });
        }

        // This is ffmpeg command which helps in creating chunks of videos
        const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${videoOutPath}/movie%04d.ts" -start_number 0 ${hlsPath}`;

        // This command executes the ffmpegcommand
        exec(ffmpegCommand, (error, stderr, stdout) => {
            if (error) {
                console.log("Error occured! Please look below for more info: \n", error);
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
        const videoURL = `http://localhost:3000/public/videos/${videoId}/index.m3u8`;

        res.status(200).json({ videoURL: videoURL });

    } catch (error) {
        res.status(500).json({ error: error });
    }
});

export default fileUploader;
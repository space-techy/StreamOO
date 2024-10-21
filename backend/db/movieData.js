import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: [true, "Movie Name is required! "],
    },
    movieGenre: {
        type: String,
        required: [true, "Movie Genre is required! "],
    },
    movieDescription: {
        type: String,
        required: [true, "Movie Description is required! "],
    },
    moveThumbnail: {
        type: Buffer,
        required: [true, "Movie Image or Thumbnail is required! "],
    },
    movieCaste: {
        type: String,
        required: [true, "Movie Caster is required!"],
    },
    movieURL: {
        type: String,
    },
});

const Movie = mongoose.model("Moive", movieSchema);

export default Movie;
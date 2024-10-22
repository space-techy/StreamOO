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
    movieThumbnail: { // Make sure this matches the field in the save logic
        type: Buffer,
        required: [true, "Movie Thumbnail is required! "],
    },
    movieCaste: {
        type: String,
        required: [true, "Movie Caste is required!"],
    },
    movieReleaseYear: {
        type: String,
        required: [true, "Movie Release Year is required!"],
    },
    movieURL: {
        type: String,
    },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

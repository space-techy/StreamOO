import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function MovieUploader() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const uploadMovie = async (data) => {
    try {
        var videoURL = "none";
        if((data.movieVideo).length > 0){
            console.log("Here!!!!");
            const movieData = new FormData();
            movieData.append("movieVideo",data.movieVideo[0]);
            console.log(movieData);
            const newResponse = await axios.post(`${'https://streamoo-backend.spacetechy.engineer/'}/upload`,movieData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if(newResponse.status == 200){
                videoURL = newResponse.data.videoURL;
            } else {
                alert("Some error Occured", newResponse.error);
            }
        }

        const formData = new FormData();
        formData.append("movieThumbnail", data.movieThumbnail[0]);
        formData.append("movieName", data.movieName);
        formData.append("movieGenres", data.movieGenres);
        formData.append("movieDescription", data.movieDescription);
        formData.append("movieURL", videoURL);
        formData.append("movieCaste",data.movieCaste);
        formData.append("movieReleaseYear", data.movieReleaseYear);
        try{
            console.log(formData);
            const response = await axios.post(`${'https://streamoo-backend.spacetechy.engineer/'}/upload/movieData`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if(response.status == 200){
                alert("Movie Uploaded successfully!");
                navigate("/");
            } else {
                alert("Some error Occured please retry!",response.error);
            }
        } catch(error) {
            console.error("Upload failed:", error);
            alert("Failed to upload movie. Please try again.");
        }
    } catch (error) {
        console.error("Upload failed:", error);
        alert("Failed to upload movie. Please try again.");
    }
  };

//   useEffect(()=>{
//     console.log(formData)
//   },[formData])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Upload Movie
            </h2>
            <form onSubmit={handleSubmit(uploadMovie)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieThumbnail">
                        Movie Thumbnail Photo:
                    </label>
                    <input
                        type="file"
                        {...register("movieThumbnail", { required: "Thumbnail is required" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.movieThumbnail && (
                        <span className="text-red-500 text-sm">{errors.movieThumbnail.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieName">
                        Movie Name:
                    </label>
                    <input
                        type="text"
                        {...register("movieName", { required: "Genres are required" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.movieName && (
                        <span className="text-red-500 text-sm">{errors.movieName.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieGenres">
                        Movie Genres:
                    </label>
                    <input
                        type="text"
                        {...register("movieGenres", { required: "Genres are required" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.movieGenres && (
                        <span className="text-red-500 text-sm">{errors.movieGenres.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieCaste">
                        Movie Caste:
                    </label>
                    <input
                        type="text"
                        {...register("movieCaste", { required: "Caste is required" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.movieGenres && (
                        <span className="text-red-500 text-sm">{errors.movieGenres.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieCaste">
                        Movie Release Year :
                    </label>
                    <input
                        type="text"
                        {...register("movieReleaseYear", { required: "Release Year is required" })}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.movieReleaseYear && (
                        <span className="text-red-500 text-sm">{errors.movieReleaseYear.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieDescription">
                        Movie Description:
                    </label>
                    <textarea
                        {...register("movieDescription", { required: "Description is required" })}
                        className="w-full border border-gray-300 p-2 rounded"
                        rows="3"
                    ></textarea>
                    {errors.movieDescription && (
                        <span className="text-red-500 text-sm">{errors.movieDescription.message}</span>
                    )}
                </div>

                <div>
                    <p className="text-red-800 text-[0.8rem]">Note: If you don't upload your video a Stock video will be Uploaded!</p>
                    <label className="block text-sm font-medium mb-1" htmlFor="movieVideo">
                        Upload Movie:
                    </label>
                    <input
                        type="file"
                        {...register("movieVideo")}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.movieVideo && (
                        <span className="text-red-500 text-sm">{errors.movieVideo.message}</span>
                    )}
                </div>

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Upload Movie
                </button>
            </form>
        </div>
    </div>
  );
}

export default MovieUploader;

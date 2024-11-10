import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import MoivePopup from "./MoivePopup";
import axios from "axios";
import { Play, Info } from "lucide-react"; // Importing icons
import { Link } from "react-router-dom";

function RowContainer() {
    const [moviePop, setMoviePop] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await axios.get(`${VITE_MOVIE_UPLOAD_URL}/getMovies`);
                setMovieData(movies.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, []);

    const openThisMovieCard = (movie) => {
        setSelectedMovie(movie);
        setMoviePop(true);
    };

    const closeThisMoiveCard = () => {
        setMoviePop(false);
        setSelectedMovie(null);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
    };

    return (
        <>
            {moviePop && <MoivePopup onClickClose={closeThisMoiveCard} movie={selectedMovie} />}
            <div className="text-white w-full pt-[3vh] pl-[16vh] pb-[5vh] pr-[16vh]" style={{ background: "#090304" }}>
                <div className="text-[2rem] font-bold">Movies</div>
                <Slider {...settings}>
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-shrink-0 pl-[0.4rem] pr-[0.4rem] rounded-xl transition-transform duration-300 ease-in-out"
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Scaling image on hover
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105" // Adjusted overlay with a bottom gradient
                            >
                                <h3 className="text-white font-bold text-lg mb-2 px-2 text-center">{movie.movieName}</h3>
                                <div className="flex space-x-2 mb-4">
                                    <Link to="/temp_video" state={{ movieURL: movie.movieURL }} >
                                        <button className="bg-white text-black px-4 py-1 rounded flex items-center text-sm font-bold hover:bg-opacity-80 transition-colors">
                                            <Play size={16} className="mr-2" /> Play
                                        </button>
                                    </Link>
                                    <button className="bg-gray-600 text-white px-4 py-1 rounded flex items-center text-sm hover:bg-opacity-80 transition-colors">
                                        <Info size={16} className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-shrink-0 pl-[0.2rem] pr-[0.2rem] rounded-xl transition-transform duration-300 ease-in-out"
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Scaling image on hover
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl" // Adjusted overlay with a bottom gradient
                            >
                                <h3 className="text-white font-bold text-lg mb-2 px-2 text-center">{movie.movieName}</h3>
                                <div className="flex space-x-2 mb-4">
                                    <Link to="/temp_video" state={{ movieURL: movie.movieURL }} >
                                        <button className="bg-white text-black px-4 py-1 rounded flex items-center text-sm font-bold hover:bg-opacity-80 transition-colors">
                                            <Play size={16} className="mr-2" /> Play
                                        </button>
                                    </Link>
                                    <button className="bg-gray-600 text-white px-4 py-1 rounded flex items-center text-sm hover:bg-opacity-80 transition-colors">
                                        <Info size={16} className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-shrink-0 pl-[0.2rem] pr-[0.2rem] rounded-xl transition-transform duration-300 ease-in-out"
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Scaling image on hover
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl" // Adjusted overlay with a bottom gradient
                            >
                                <h3 className="text-white font-bold text-lg mb-2 px-2 text-center">{movie.movieName}</h3>
                                <div className="flex space-x-2 mb-4">
                                    <Link to="/temp_video" state={{ movieURL: movie.movieURL }} >
                                        <button className="bg-white text-black px-4 py-1 rounded flex items-center text-sm font-bold hover:bg-opacity-80 transition-colors">
                                            <Play size={16} className="mr-2" /> Play
                                        </button>
                                    </Link>
                                    <button className="bg-gray-600 text-white px-4 py-1 rounded flex items-center text-sm hover:bg-opacity-80 transition-colors">
                                        <Info size={16} className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-shrink-0 pl-[0.2rem] pr-[0.2rem] rounded-xl transition-transform duration-300 ease-in-out"
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Scaling image on hover
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl" // Adjusted overlay with a bottom gradient
                            >
                                <h3 className="text-white font-bold text-lg mb-2 px-2 text-center">{movie.movieName}</h3>
                                <div className="flex space-x-2 mb-4">
                                    <Link to="/temp_video" state={{ movieURL: movie.movieURL }} >
                                        <button className="bg-white text-black px-4 py-1 rounded flex items-center text-sm font-bold hover:bg-opacity-80 transition-colors">
                                            <Play size={16} className="mr-2" /> Play
                                        </button>
                                    </Link>
                                    <button className="bg-gray-600 text-white px-4 py-1 rounded flex items-center text-sm hover:bg-opacity-80 transition-colors">
                                        <Info size={16} className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-shrink-0 pl-[0.2rem] pr-[0.2rem] rounded-xl transition-transform duration-300 ease-in-out"
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Scaling image on hover
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl" // Adjusted overlay with a bottom gradient
                            >
                                <h3 className="text-white font-bold text-lg mb-2 px-2 text-center">{movie.movieName}</h3>
                                <div className="flex space-x-2 mb-4">
                                    <Link to="/temp_video" state={{ movieURL: movie.movieURL }} >
                                        <button className="bg-white text-black px-4 py-1 rounded flex items-center text-sm font-bold hover:bg-opacity-80 transition-colors">
                                            <Play size={16} className="mr-2" /> Play
                                        </button>
                                    </Link>
                                    <button className="bg-gray-600 text-white px-4 py-1 rounded flex items-center text-sm hover:bg-opacity-80 transition-colors">
                                        <Info size={16} className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-shrink-0 pl-[0.2rem] pr-[0.2rem] rounded-xl transition-transform duration-300 ease-in-out"
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Scaling image on hover
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl" // Adjusted overlay with a bottom gradient
                            >
                                <h3 className="text-white font-bold text-lg mb-2 px-2 text-center">{movie.movieName}</h3>
                                <div className="flex space-x-2 mb-4">
                                    <Link to="/temp_video" state={{ movieURL: movie.movieURL }} >
                                        <button className="bg-white text-black px-4 py-1 rounded flex items-center text-sm font-bold hover:bg-opacity-80 transition-colors">
                                            <Play size={16} className="mr-2" /> Play
                                        </button>
                                    </Link>
                                    <button className="bg-gray-600 text-white px-4 py-1 rounded flex items-center text-sm hover:bg-opacity-80 transition-colors">
                                        <Info size={16} className="mr-2" /> More Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default RowContainer;

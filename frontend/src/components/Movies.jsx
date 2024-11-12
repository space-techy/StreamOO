import { useEffect, useState } from "react";
import MoivePopup from "./MoivePopup";
import axios from "axios";
import { Play, Info } from "lucide-react"; // Importing icons
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Movies() {
    const [moviePop, setMoviePop] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await axios.get(`${'https://streamoo-backend.spacetechy.engineer/'}/getMovies`);
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

    return (
        <>  
            <Navbar />
            {moviePop && <MoivePopup onClickClose={closeThisMoiveCard} movie={selectedMovie} />}
            <div className="text-white m-20 px-4"> {/* Adjusted margin-top and padding */}
                <div className="flex flex-wrap gap-4"> {/* Flex container with gap for spacing */}
                    {movieData.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative group flex-1 min-w-[200px] max-w-[300px] mb-4" // Flex item with responsive width
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105"
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
                            className="relative group flex-1 min-w-[200px] max-w-[300px] mb-4" // Flex item with responsive width
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105"
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
                            className="relative group flex-1 min-w-[200px] max-w-[300px] mb-4" // Flex item with responsive width
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105"
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
                            className="relative group flex-1 min-w-[200px] max-w-[300px] mb-4" // Flex item with responsive width
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105"
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
                            className="relative group flex-1 min-w-[200px] max-w-[300px] mb-4" // Flex item with responsive width
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105"
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
                            className="relative group flex-1 min-w-[200px] max-w-[300px] mb-4" // Flex item with responsive width
                            onClick={() => openThisMovieCard(movie)}
                        >
                            <img
                                src={movie.movieThumbnail}
                                alt={movie.movieName}
                                className="rounded-xl h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl scale-105"
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
                    
                    
                </div>
            </div>
        </>
    );
}

export default Movies;

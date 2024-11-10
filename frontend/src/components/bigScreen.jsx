import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Navbar from './navbar';
import { BigScreenEx } from '../ExampleDev/Examples';
import RowContainer from './rowContainer';
import MoivePopup from './moivePopup';

function BigScreen(){

    const props = BigScreenEx;

    return(
        <>
            <Navbar />
            <div className="relative w-screen h-[100vh] bg-cover bg-center" style={{"backgroundImage" : `url(${props.MovieBgImage})`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" style={{"background" : "linear-gradient(35deg, rgba(9,3,4,1) 30%, rgba(173,0,0,0) 65%), linear-gradient(0deg, rgba(9,3,4,1) 0%, rgba(9,3,4,0.7) 20%, rgba(9,3,4,0) 40%)"}}>
                    {/* Div for movie name with x and y axis changed manually */}
                    <div className="absolute text-white transform translate-x-[8vw] translate-y-[48vh] w-[25vw]" dir="ltr">

                        {/* Movie name with text sized rem */}
                        <h1 className="text-[3.35rem] font-bold font text-wrap leading-[4rem]">{props.MovieName}</h1>

                        {/* Info section with*/}
                        <p className="mt-5">
                            {props.MovieInfo}
                        </p>

                        {/* Play and Info buttons */}
                        <div className='flex mt-5 space-x-8'>
                            {/* Play button */}
                            <button className='flex items-center justify-center bg-white text-black px-4 py-2 rounded-2xl hover:bg-slate-300 transition w-[9vw]'>
                                <PlayArrowIcon className="mr-2" />
                                Play
                            </button>

                            <button className="flex items-center justify-center bg-gray-700 bg-opacity-60 text-white px-4 py-2 rounded-2xl hover:bg-gray-600 transition w-[10vw]">
                                <InfoOutlinedIcon className="mr-2" />
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <RowContainer />
            <RowContainer />
            <RowContainer />
            <RowContainer />
        </>
    );
}

export default BigScreen;
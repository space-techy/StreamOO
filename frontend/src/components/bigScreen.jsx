import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NavbarWeb from './navbar';


function BigScreen(){


    return(
        <>
            <NavbarWeb />
            <div className="relative w-screen h-[100vh] bg-cover bg-center" style={{"backgroundImage" : "url(https://occ-0-4957-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXBVOVKbjfJx3rUK6EcXNFVmGnMml5I7WX2RyEduRi5Yzj_El6lDof1qpSMK5BlJ9TyGxIB2CDjA9b-M5SaMbQ1vLTHf7eOTZl0-.webp?r=f24)"}}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" style={{"background" : "linear-gradient(35deg, rgba(9,3,4,1) 30%, rgba(173,0,0,0) 65%)"}}>
                    {/* Div for movie name with x and y axis changed manually */}
                    <div className="absolute text-white transform translate-x-[8vw] translate-y-[48vh] w-[25vw]" dir="ltr">

                        {/* Movie name with text sized rem */}
                        <h1 className="text-[3.35rem] font-bold font text-wrap">Sonic The HedgeHog</h1>

                        {/* Info section with*/}
                        <p className="mt-5">
                            When a speedy extraterrestrial hedgehog crashes on Earth, he makes a home — but nefarious forces want to capture him. Based on the video game.
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
        </>
    );
}

export default BigScreen;
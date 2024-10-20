import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Link } from 'react-router-dom';

const MoivePopup = ({onClickClose}) => {


    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-opacity-70 bg-black  text-white z-50 overflow-scroll scrollbar-hide backdrop-blur-[3.5px]">
                <div className='absolute h-full w-full' onClick={onClickClose}></div>
                <div className='absolute transform translate-x-[52%] translate-y-[7%] w-[50vw] rounded-xl bg-[#0a0405] '>
                    <div className="relative rounded-xl h-[65vh] w-full">
                        <img src="https://occ-0-4957-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXBVOVKbjfJx3rUK6EcXNFVmGnMml5I7WX2RyEduRi5Yzj_El6lDof1qpSMK5BlJ9TyGxIB2CDjA9b-M5SaMbQ1vLTHf7eOTZl0-.webp?r=f24" alt="Movie Name" className='absolute h-full object-cover rounded-xl'/>
                        <div className='absolute h-full w-full object-cover' style={{
                            backgroundImage: "linear-gradient(to top, rgba(9,3,4,1), rgba(9,3,4,0.1), rgba(9,3,4,0))"
                        }}></div>
                    </div>
                    <div className='w-[40%] absolute -translate-y-[102%] text-white text-[3rem] font-bold text-wrap leading-[3.25rem] ml-8 mr-8'>
                        <p>Sonic The HedgeHog</p>
                    </div>
                    <div className='flex mt-8 ml-8 mr-8'>
                        <Link to="/temp_video">
                            <button className='flex items-center justify-center bg-white text-black px-4 py-2 rounded-2xl hover:bg-slate-300 transition w-[9vw] min-h-[1vh]'>
                                <PlayArrowIcon className="mr-2" />
                                    Play
                            </button>
                        </Link>
                        <button className=' flex items-center justify-center  text-white px-4 py-2 w-[9vw]'>
                            <AddCircleOutlineIcon className="mr-2" sx={{fontSize: "2rem"}}/>
                        </button>
                    </div>
                    <div className='m-8 text-white w-full'>
                        <div className='flex space-x-[30%]'>
                            <div className='w-[40%]'>
                                <div className='font-bold text-[1.25rem] mb-[0.75rem]'>
                                    Description :
                                </div>
                                <div className='text-[1rem] text-wrap'>
                                    <p>
                                        A movie about a Sonic The hedgehog where he jumps between 2 worlds!
                                        And now wants to returns to his own world!
                                        What will he do?
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <div>
                                    <div className='font-bold text-[1.25rem] mb-[0.75rem]'>
                                        Cast
                                    </div>
                                    <div className='text-[1rem] text-wrap'>
                                        Yashu,Arjun,Niki
                                    </div>
                                </div>
                                <div>
                                    <div className='font-bold text-[1.25rem] mb-[0.75rem]'>
                                        Release Date
                                    </div>
                                    <div className='text-[1rem] text-wrap'>
                                        22/12/2019
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-screen h-[10vh]'> 
                    <div className='ml-[74vw] mt-[3vh]' >
                        <button className='absolute flex items-center justify-center  text-white px-4 py-2 w-[9vw]' onClick={onClickClose}>
                            <HighlightOffRoundedIcon className="mr-2" sx={{fontSize: "2.5rem"}}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoivePopup

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function RowContainer(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
    };
    
    return (
        <> 
            <div className=" text-white w-full pt-[3vh] pl-[16vh] pb-[5vh] pr-[16vh]"  style={{"background" : "#090304"}}>
                <div className="text-[2rem] font-bold">
                    Movies
                </div>
                <Slider {...settings} >
                        
                            <img  src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                            <img src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                            <img src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                            <img src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                            <img src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                            <img src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                            <img src="./images/temo.webp" alt="Movie Card" className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
                        


                        {/* Hover Card */}
                        {/* <div className="min-w-[250px] h-[450px] bg-gray-800 rounded-xlg snap-center shrink-0 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                            <img  src="./images/temo.webp" alt="Movie Card" className="w-full h-[80%] object-cover rounded-t-lg" />
                            <div className="p-3 flex justify-between items-center">
                                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition-all duration-200"><PlayArrowIcon className="mr-2" /> Play</button>
                                <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all duration-200"><InfoOutlinedIcon className="mr-2" />More Info</button>
                            </div>
                        </div> */}
                </Slider>
            </div>
        </>
    );
}

export default RowContainer;
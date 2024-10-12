
const ImageCard = (props)=>{
    return(
        <>
            <img  src={props.src} alt={props.movieName} className="pl-[0.2rem] pr-[0.2rem] rounded-xl"/>
        </>
    );
}

export default ImageCard;
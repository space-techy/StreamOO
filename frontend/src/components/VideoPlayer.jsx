import { useRef, useState } from "react";
import VideoPlayerCard from "./VideoPlayerCard";
import { flexbox, height, width } from "@mui/system";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const VideoPlayer = ()=>{
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const location = useLocation();
    const { movieURL } = location.state || {};
    const navigate = useNavigate();
    console.log(movieURL);

    const hotkeysFunc = (event)=>{
      const player = playerRef.current;
      // k/space to pause/play
      if(event.which == 75 || event.which == 32){
        if(player.paused()){
          player.play();
        } else {
          player.pause();
        }
      }

      // m to mute/unmute
      if(event.which == 77){
        if(player.muted()){
          player.muted(false);
        } else {
          player.muted(true);
        }
      }

      // -> to forward 10s
      if(event.which == 39){
        const currTime = player.currentTime();
        player.currentTime(currTime + 10);
      }

      // <- to backward 10s
      if(event.which == 37){
        const currTime = player.currentTime();
        player.currentTime(currTime - 10);
      }

      // f for fullscreen/exit Full screen
      if(event.which == 70){
        if(player.isFullscreen()){
          player.exitFullscreen();
        } else {
          player.requestFullscreen();
        }
      }

    }

    const videoPlayerOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: false,
        disablePictureInPicture: false,
        playbackRates: [0,0.5,1,1.5,2],
        controlBar : {
          skipButtons: {
            forward: 10,
            backward: 10,
          }
        },
        userActions: {
          hotkeys: hotkeysFunc,
        },
        sources: [{
            src: movieURL,
            type: "application/x-mpegURL"
        }],
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;
        // You can handle player events here, for example:
        player.on('waiting', () => {
          videojs.log('player is waiting');
        });
    
        player.on('dispose', () => {
          videojs.log('player will dispose');
        });
      };

    return (
        <>
          <button onClick={()=>{
            navigate(-1);
          }}>
            <p>Go Back</p>
          </button>
          <VideoPlayerCard options={videoPlayerOptions} onReady={handlePlayerReady}/>
        </>
    );
}

export default VideoPlayer;
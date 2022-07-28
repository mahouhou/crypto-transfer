import React, { useState } from "react";
import ReactPlayer from 'react-player/vimeo';
import ErrorBoundary from "./ErrorBoundary";
import CoolEarth from "./svg/CoolEarth";
// import {default as CoolEarth} from '%PUBLIC_URL%/logo-cool-earth-white.svg';
// import {ReactComponent as CoolEarth} from './logo-cool-earth-white.svg';
// import CoolEarth from '../assets/images/logo-cool-earth-white.svg';

const Video = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    function onEnded() {
        setVideoEnded(true);
    };

    return (
        <>
        <ErrorBoundary>
        <div className="end-message" style={videoEnded ? {display: "block"} : {display: "none"}}>
            {/* <svg><CoolEarth /></svg> */}
            <ErrorBoundary>
                <CoolEarth />
            {/* <img src={CoolEarth} alt="Cool Earth" /> */}
            {/* {console.log("../assets/images/logo-cool-earth-white.svg")} */}
            </ErrorBoundary>
            <h1>Here is a message!</h1>
            <button className="button">Donate</button>
        </div>
        </ErrorBoundary>
        <div className="video-background">
            <ReactPlayer
                url="https://player.vimeo.com/video/728786848?h=6c4f02223e"
                enablejsapi={1}
                id="video" background={1}
                byline={0} portrait={0} title={0}
                // width="100%" height="100%"
                // width="7680" height="4320"
                width="6290" height="4375"
                autoPlay={true} rel={0}
                fs={0} iv_load_policy={3}
                modestranding={1}
                color="d4200c"
                controls={false}
                onEnded={onEnded}
            />
        </div>
        </>
    )
}

export default Video;
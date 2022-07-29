import React, { useState } from "react";
import ReactPlayer from 'react-player/vimeo';
import ErrorBoundary from "./ErrorBoundary";
import CoolEarth from "./svg/CoolEarth";

const Video = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    function onEnded() {
        setVideoEnded(true);
    };

    return (
        <>
        <ErrorBoundary>
        <div className="end-message" style={videoEnded ? {display: "block"} : {display: "none"}}>
            <div className="message-wrap">
                <ErrorBoundary>
                    <CoolEarth />
                </ErrorBoundary>
                <div className="donate-message">
                    <p>There's still time left. Indigenous peoples and local communities are fighting for climate justice. Join them.</p>
                    <button className="button" href="https://www.coolearth.org/donate/">Donate</button>
                </div>
            </div>
        </div>
        </ErrorBoundary>
        <div className="video-background" style={videoEnded ? {display: "none"} : {display: "block"}}>
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
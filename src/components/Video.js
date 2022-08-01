import React, { useState } from "react";
import ReactPlayer from 'react-player/vimeo';
import ErrorBoundary from "./ErrorBoundary";
import CoolEarth from "./svg/CoolEarth";
import CoinChaos from "../assets/images/coin-chaos.gif";

const Video = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    function videoLoaded() {
        setVideoLoading(false);
    };

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
                    <a className="button" href="https://www.coolearth.org/donate/" target="_blank">Donate</a>
                </div>
            </div>
        </div>
        </ErrorBoundary>
        <div className="video-loading" style={videoLoading ? {display: "flex"} : {display: "none"}}>
            <h1>100% of funds transferred</h1>
            <div>
                <img className="coin-chaos" src={CoinChaos} />
                <img className="coin-chaos" src={CoinChaos} />
                <img className="coin-chaos" src={CoinChaos} />
                <img className="coin-chaos" src={CoinChaos} />
                <img className="coin-chaos" src={CoinChaos} />
            </div>
        </div>
        <div className="video-background" style={videoEnded ? {display: "none"} : {display: "block"}}>
            <ReactPlayer
                url="https://player.vimeo.com/video/728786848?h=6c4f02223e"
                enablejsapi={1} rel={0}
                id="video" background={1} color="d4200c"
                byline={0} portrait={0} title={0}
                width="100%" height="100%"
                // width="7680" height="4320"
                // width="6290" height="4375"
                autoPlay={true} playing={true}
                fs={0} iv_load_policy={3}
                modestranding={1} controls={false}
                onEnded={onEnded} onReady={videoLoaded}
            />
        </div>
        </>
    )
}

export default Video;
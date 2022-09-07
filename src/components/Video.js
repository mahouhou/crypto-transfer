import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { isSafari } from "react-device-detect";

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

    function onError() {
        console.log("This video cannot be played due to an error")
    }

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
                    <a className="button" href="https://www.coolearth.org/donate/" target="_blank" rel="noreferrer">DONATE</a>
                </div>
            </div>
        </div>
        </ErrorBoundary>
        <div className="video-loading" style={videoLoading ? {display: "flex"} : {display: "none"}}>
            <aside>
                <div className="frame">
                    <h1>100% of funds transferred</h1>
                    <div>
                        <img className="coin-chaos" src={CoinChaos} alt="" />
                        <img className="coin-chaos" src={CoinChaos} alt="" />
                        <img className="coin-chaos" src={CoinChaos} alt="" />
                        <img className="coin-chaos" src={CoinChaos} alt="" />
                        <img className="coin-chaos" src={CoinChaos} alt="" />
                    </div>
                    <h2>Loading, please wait...</h2>
                </div>
            </aside>
        </div>
        {!videoEnded && 
        <div className="video-background">
        <ReactPlayer
            url={ isSafari ? "https://player.vimeo.com/video/728786848?h=6c4f02223e" :
            [   {src: "video/End-Game-Cut-Scene.mp4", type: "video/mp4"},
                {src: "video/End-Game-Cut-Scene-Lolores.webm", type: "video/webm"}]
            }
            className="video"
            width="100%" height="100%"
            playing={true} controls={true}
            onEnded={onEnded}
            onBufferEnd={videoLoaded}
            onLoaded={ isSafari ? videoLoaded : null }
            onError={onError}

            config={{
                vimeo: {
                    playerOptions: {
                        background: 1,
                        color: "d4200c",
                        byline: 0,
                        portrait: 0,
                        title: 0
                    }
                }
            }}

            // enablejsapi={1} rel={0}
            // forcevideo="true"
            // fs={0} iv_load_policy={3}
            // modestranding={1}
            
        />
    </div>
        }
        </>
    )
}

export default Video;
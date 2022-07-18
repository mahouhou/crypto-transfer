import ReactPlayer from 'react-player/vimeo'

function Video() {
    return (
        <div className="video-background">
            <ReactPlayer
                url="https://player.vimeo.com/video/728786848?h=6c4f02223e"
                enablejsapi={1}
                id="video" background={1}
                byline={0} portrait={0} title={0}
                // width="100%" height="100%"
                width="7680" height="4320"
                autoPlay={true} rel={0}
                fs={0} iv_load_policy={3}
                modestranding={1}
                color="d4200c"
                controls={false}
            />
        </div>
    )
}

export default Video;
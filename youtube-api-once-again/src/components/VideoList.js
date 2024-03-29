import React from 'react';
import VideoItem from './VideoItem';

// props.videos...
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem 
                onVideoSelect={onVideoSelect}
                video={video}
                key={video.id.videoId} />
        );
    });

    return <div>{renderedList}</div>;
};

export default VideoList;

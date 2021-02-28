import React from "react";
import "./VideoSection.css";
import VideoCard from "./VideoCard";
import VideoData from "./VideoData.json";

function VideoSection({ search, expand }) {
  return (
    <div className={`videoSection ${expand && "expand"}`}>
      <div className="videos">
        {VideoData.map((val, index) => {
          if (val.title.toLowerCase().includes(search.toLowerCase()))
            return (
              <VideoCard
                key={index}
                thumbnail={val.thumbnail}
                thumbnailGIF={val.thumbnailGIF}
                title={val.title}
                channel={val.channel}
                views={val.views}
                timestamp={val.timestamp}
                channelLogo={val.channelLogo}
              />
            );
          return null;
        })}
      </div>
    </div>
  );
}

export default VideoSection;

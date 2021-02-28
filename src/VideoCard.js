import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ReactTooltip from "react-tooltip";

function VideoCard({
  thumbnail,
  thumbnailGIF,
  title,
  channel,
  views,
  timestamp,
  channelLogo,
}) {
  const [mouseOver, setmouseOver] = useState(false);
  const mouseOverfunc = () => setmouseOver(true);
  const mouseOutfunc = () => setmouseOver(false);
  return (
    <>
      <ReactTooltip
        place="bottom"
        type="info"
        delayShow={500}
        backgroundColor="gray"
        borderColor="black"
      />
      <div
        className="videoCard"
        onMouseOver={mouseOverfunc}
        onMouseOut={mouseOutfunc}
      >
        <img
          className="thumbnail"
          src={mouseOver ? thumbnailGIF : thumbnail}
          alt="thumbnail"
        />
        <div className="VideoCardInfo">
          <Avatar
            data-tip={channel}
            className="videoCardAvatar"
            alt={channel}
            src={channelLogo}
          />
          <div className="videoCardText">
            <h4 data-tip={title}>{title}</h4>
            <p data-tip={channel}>{channel}</p>
            <p>
              {views} · {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;

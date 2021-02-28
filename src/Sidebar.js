import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Sidebar({ visibility }) {
  const [ShowMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!ShowMore);
  };

  useEffect(() => {});

  return (
    <div className={visibility ? "sidebar active" : "sidebar"}>
      <SidebarRow visible={visibility} selected icon={HomeIcon} title="Home" />
      <SidebarRow visible={visibility} icon={WhatshotIcon} title="Trending" />
      <SidebarRow
        visible={visibility}
        icon={SubscriptionsIcon}
        title="Subscriptions"
      />
      <div className={visibility ? "second active" : "second"}>
        <hr />
        <SidebarRow
          visible={visibility}
          icon={VideoLibraryIcon}
          title="Library"
        />
        <SidebarRow visible={visibility} icon={HistoryIcon} title="History" />
        <SidebarRow
          visible={visibility}
          icon={OndemandVideoIcon}
          title="Your videos"
        />
        <SidebarRow
          visible={visibility}
          icon={WatchLaterIcon}
          title="Watch later"
        />
        <SidebarRow
          visible={visibility}
          icon={ThumbUpAltIcon}
          title="Liked videos"
        />
        <div
          className="showMoreToggler"
          onClick={toggleShowMore}
          hidden={ShowMore ? true : false}
        >
          <SidebarRow
            visible={visibility}
            icon={ExpandMoreIcon}
            title="Show more"
          />
        </div>
        {ShowMore && (
          <>
            <SidebarRow
              visible={visibility}
              icon={PlaylistPlayIcon}
              title="Songs"
            />
            <SidebarRow
              visible={visibility}
              icon={PlaylistPlayIcon}
              title="Improve Your Chess"
            />
            <SidebarRow
              visible={visibility}
              icon={PlaylistPlayIcon}
              title="React tutorials"
            />
            <SidebarRow
              visible={visibility}
              icon={PlaylistPlayIcon}
              title="Top 20 movies"
            />
            <div className="showLessToggler" onClick={toggleShowMore}>
              <SidebarRow
                visible={visibility}
                icon={ExpandLessIcon}
                title="Show less"
              />
            </div>
          </>
        )}
        <hr />
        <p className="text">SUBSCRIPTIONS</p>
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
        <SidebarRow
          visible={visibility}
          icon={AccountCircleIcon}
          title="Codeforces"
        />
      </div>
    </div>
  );
}

export default Sidebar;

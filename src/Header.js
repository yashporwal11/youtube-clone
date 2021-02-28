import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ReactTooltip from "react-tooltip";
import VideoSection from "./VideoSection";
import Sidebar from "./Sidebar";
import Avatar from "@material-ui/core/Avatar";
import user from "./images/user.jpg";
import notificationUser from "./images/notificationUser.jpg";

function Header() {
  const [notifications, setnotifications] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [sidebar, setsidebar] = useState(true);

  const showNotifications = () => setnotifications(!notifications);
  const changeSearchInput = (e) => setSearchInput(e.target.value);
  const toggleSidebar = () => setsidebar(!sidebar);

  return (
    <>
      <ReactTooltip
        place="bottom"
        type="info"
        backgroundColor="gray"
        borderColor="black"
        delayShow={500}
      />
      <div className="header">
        <div className="header_left">
          <div className="hamburger" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <Link to="/">
            <img
              data-tip="Youtube Home"
              className="header_logo"
              src={logo}
              alt="youtube"
            />
          </Link>
        </div>

        <div className="header_center">
          <input
            type="text"
            placeholder="Search"
            onChange={changeSearchInput}
            value={searchInput}
          />
          <Link data-tip="Search" to="/" className="searchIcon">
            <SearchIcon />
          </Link>
        </div>

        <div className="header_right">
          <VideoCallIcon data-tip="Create" className="header_right_icon" />
          <AppsIcon data-tip="YouTube apps" className="header_right_icon" />
          <div className="notificationToggler" onClick={showNotifications}>
            <NotificationsIcon
              data-tip="Notifications"
              className="header_right_icon"
            />
          </div>
          {notifications && (
            <>
              <div className="notifications">
                <div className="notification">
                  <p className="notificationLogo">
                    <Avatar src={notificationUser} alt="channel" />
                  </p>
                  <p className="notificationText">
                    Rahul Dua uploaded : Jeans | Stand Up comedy by Rahul Dua
                    Jeans | Stand Up comedy by Rahul Dua
                  </p>
                </div>
                <hr />
                <div className="notification">
                  <p className="notificationLogo">
                    <Avatar src={notificationUser} alt="channel" />
                  </p>
                  <p className="notificationText">
                    Rahul Dua uploaded : Jeans | Stand Up comedy by Rahul Dua
                    Jeans | Stand Up comedy by Rahul Dua
                  </p>
                </div>
                <hr />
                <div className="notification">
                  <p className="notificationLogo">
                    <Avatar src={notificationUser} alt="channel" />
                  </p>
                  <p className="notificationText">
                    Rahul Dua uploaded : Jeans | Stand Up comedy by Rahul Dua
                    Jeans | Stand Up comedy by Rahul Dua
                  </p>
                </div>
                <hr />
                <div className="notification">
                  <p className="notificationLogo">
                    <Avatar src={notificationUser} alt="channel" />
                  </p>
                  <p className="notificationText">
                    Rahul Dua uploaded : Jeans | Stand Up comedy by Rahul Dua
                    Jeans | Stand Up comedy by Rahul Dua
                  </p>
                </div>
              </div>
            </>
          )}
          <Avatar src={user} alt="User" className="header_right_icon avatar" />
        </div>
      </div>
      <Sidebar visibility={sidebar} />
      <VideoSection search={searchInput} expand={!sidebar} />
    </>
  );
}

export default Header;

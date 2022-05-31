import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Header = () => {
  const dispatch = useDispatch();
  

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7560/7560801.png"
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />

        <HeaderOption avatar ={true} onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;

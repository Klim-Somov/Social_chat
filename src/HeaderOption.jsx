import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({avatar, title, Icon, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="header-option_icon" />}

     { avatar && (<Avatar src={user?.photoUrl} className="header-option_icon">
        {user?.email[0]}
      </Avatar>)}
      <h3 className="header-option_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

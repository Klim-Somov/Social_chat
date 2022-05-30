import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="sidebar__hash">#</span>{" "}
      <p className="sidebar__recentItem">{topic}</p>
    </div>
    
  );
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LSc-v24-ikoz_oFx2jfZk5TbPdmg-Vvig3aUM_DeIka1FmsSGV_l_zW94NJ4g6q50qU&usqp=CAU"
          alt="bg"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]} </Avatar> 
        <h2>{user.displayName}</h2>
        <h4>{user.email} </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your</p>
          <p className="sidebar__statNumber">2,278</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,278</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("react js")}
        {recentItems("vue js")}
        {recentItems("programming")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default Sidebar;

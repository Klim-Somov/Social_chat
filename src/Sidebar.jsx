import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LSc-v24-ikoz_oFx2jfZk5TbPdmg-Vvig3aUM_DeIka1FmsSGV_l_zW94NJ4g6q50qU&usqp=CAU"
          alt="bg"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Klim Somov</h2>
        <h4>e-mail </h4>
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
      </div>
    </div>
  );
};

export default Sidebar;

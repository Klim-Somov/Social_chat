import React from "react";
import './HeaderOption.css'

function HeaderOption({ Icon, title }) {
  return (
    <div className="header-option">
      {Icon && <Icon className="header-option_icon" />}
      <h3 className="header-option_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

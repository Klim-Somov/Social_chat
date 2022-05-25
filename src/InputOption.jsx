import React from "react";
import "./InputOption.css";

function InputOption({ color, Icon, text }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{text}</h4>
    </div>
  );
}

export default InputOption;

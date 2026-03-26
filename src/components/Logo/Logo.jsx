import React from "react";
import "./Logo.css";
import logo from "../../assets/react.svg";

function Logo() {
  return (
    <div className="logoWrapper">
      <img src={logo} alt="QTify Logo" className="logoImage" />
    </div>
  );
}

export default Logo;
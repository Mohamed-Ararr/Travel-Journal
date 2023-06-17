import React from "react";
import worldIcon from "../images/world-icon.png";

export default function Headers() {
  return (
    <header className="header">
      <div className="image-holder">
        <img src={worldIcon} alt="world-icon" />
      </div>
      <h1>my travel journal</h1>
    </header>
  );
}

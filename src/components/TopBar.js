import React from "react";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="logo">
        <i class="fas fa-briefcase"></i>
        <h1>Resume Builder</h1>
      </div>
      <ToggleButton />
    </div>
  );
}

function ToggleButton() {
  return (
    <div className="toggle-div">
      <p>Preview Mode</p>
      <label className="toggle">
        <input className="toggle-checkbox" type="checkbox"></input>
        <span class="toggle-slider"></span>
      </label>
    </div>
  );
}

export default TopBar;

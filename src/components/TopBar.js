import React from "react";

function TopBar(props) {
  return (
    <div className="top-bar">
      <div className="logo">
        <i className="fas fa-briefcase"></i>
        <h1>Resume Builder</h1>
      </div>
      <ToggleButton togglePreviewMode={props.togglePreviewMode} />
    </div>
  );
}

function ToggleButton(props) {
  return (
    <div className="toggle-div">
      <p>Preview Mode</p>
      <label className="toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          onChange={props.togglePreviewMode}
        ></input>
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
}

export default TopBar;

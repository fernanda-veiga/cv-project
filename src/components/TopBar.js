import React from "react";

function TopBar(props) {
  return (
    <section className="TopBar">
      <div className="TopBar-logo">
        <h1>
          <i className="fas fa-briefcase"></i> Resume Builder
        </h1>
      </div>
      <ToggleButton togglePreviewMode={props.togglePreviewMode} />
    </section>
  );
}

function ToggleButton(props) {
  return (
    <div className="TopBar-toggle">
      <p>Preview</p>
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

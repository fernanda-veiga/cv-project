import React, { Component } from "react";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";
import InfoSection from "./components/InfoSection";
//import uniqid from "uniqid";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreviewMode: false,
      profileSection: {
        name: "",
        position: "",
      },
      infoSection: {
        telephone: "",
        email: "",
        location: "",
        linkedin: "",
        github: "",
      },
    };
  }

  togglePreviewMode = () => {
    this.setState({ isPreviewMode: !this.state.isPreviewMode });
  };

  handleFormChange = (event) => {
    const changedProfileSection = this.state.profileSection;
    changedProfileSection[event.target.id] = event.target.value;
    this.setState({ profileSection: changedProfileSection });
  };

  render() {
    return (
      <div className="App">
        <TopBar togglePreviewMode={this.togglePreviewMode} />
        <Resume
          state={this.state}
          handleFormChange={this.handleFormChange}
          isPreviewMode={this.state.isPreviewMode}
        />
      </div>
    );
  }
}

function Resume(props) {
  return (
    <div className="resume">
      <ProfileSection
        profileSection={props.state.profileSection}
        handleFormChange={props.handleFormChange}
        isPreviewMode={props.isPreviewMode}
      />
      <section className="resume-content">
        <section className="resume-content-left">
          <InfoSection
            infoSection={props.state.infoSection}
            isPreviewMode={props.isPreviewMode}
          />
        </section>
        <section className="resume-content-right"></section>
      </section>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreviewMode: false,
      ProfileSection: {
        name: "",
        position: "",
      },
      InfoSection: {
        phone: "",
        email: "",
        location: "",
        linkedin: "",
      },
      Skills: [],
      Languages: [],
      Experience: [],
      Education: [],
    };
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;

/*import React, { Component } from "react";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";
import InfoSection from "./components/InfoSection";
import "./styles/App.css";
import "./styles/ProfileSection.css";
import "./styles/TopBar.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreviewMode: false,
      name: "",
      position: "",
      phone: "",
      email: "",
      location: "",
      linkedin: "",
      skills: [],
      languages: [],
    };
  }

  togglePreviewMode = () => {
    this.setState({ isPreviewMode: !this.state.isPreviewMode });
  };

  handleFormChange = (event) => {
    let changedProperty = this.state[event.target.id];
    changedProperty = event.target.value;
    this.setState({ profileSection: changedProperty });
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
      <section className="LeftSection">
        <InfoSection
          infoSection={props.state.infoSection}
          handleFormChange={props.handleFormChange}
          isPreviewMode={props.isPreviewMode}
        />
      </section>
      <section className="resume-content-right"></section>
    </div>
  );
}

export default App;
*/

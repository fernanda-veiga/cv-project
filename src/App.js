import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Resume from "./components/Resume";
import "./styles/App.css";
import "./styles/TopBar.css";
import "./styles/Resume.css";
import "./styles/ProfileSection.css";
import "./styles/LeftSection.css";

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
      Skills: {
        allSkills: [],
        newSkill: "",
      },
      Languages: [],
      Experience: [],
      Education: [],
    };
  }

  handleProfileChange = (event) => {
    let changedProperty = this.state.ProfileSection;
    changedProperty[event.target.id] = event.target.value;
    this.setState({ ProfileSection: changedProperty });
  };

  handleInfoChange = (event) => {
    let changedProperty = this.state.InfoSection;
    changedProperty[event.target.id] = event.target.value;
    this.setState({ InfoSection: changedProperty });
  };

  handleSkillChange = (event) => {
    let changedProperty = this.state.Skills;
    changedProperty.newSkill = event.target.value;
    this.setState({ Skills: changedProperty });
  };

  addSkill = () => {
    const changedProperty = this.state.Skills;
    changedProperty.allSkills.push(changedProperty.newSkill);
    changedProperty.newSkill = "";
    this.setState({ Skills: changedProperty });
  };

  deleteSkill = (event) => {
    const changedProperty = this.state.Skills;
    const index = event.target.id.replace(/^\D+/g, "");
    changedProperty.allSkills.splice(index, 1);
    this.setState({ Skills: changedProperty });
  };

  togglePreviewMode = () => {
    console.log(this.state.isPreviewMode);
    this.setState({ isPreviewMode: !this.state.isPreviewMode });
  };

  render() {
    return (
      <div className="App">
        <TopBar togglePreviewMode={this.togglePreviewMode} />
        <Resume
          state={this.state}
          handleProfileChange={this.handleProfileChange}
          handleInfoChange={this.handleInfoChange}
          handleSkillChange={this.handleSkillChange}
          addSkill={this.addSkill}
          deleteSkill={this.deleteSkill}
        />
      </div>
    );
  }
}

/*
<App />
  <TopBar />
  <Resume />
    <ProfileSection />
    <LeftSection />
      <InfoSection />
      <Skills />
      <Languages />
    <RightSection />
      <Experience />
      <Education />
*/

export default App;

/*import React, { Component } from "react";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";
import InfoSection from "./components/InfoSection";
import "./styles/ProfileSection.css";
import "./styles/TopBar.css";

class App extends Component {
  
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



export default App;
*/

import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Resume from "./components/Resume";
import "./styles/App.css";
import "./styles/TopBar.css";
import "./styles/Resume.css";
import "./styles/ProfileSection.css";
import "./styles/LeftSection.css";
import "./styles/RightSection.css";

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
      Languages: {
        allLanguages: [],
        newLanguage: "",
      },
      Experience: {
        allExperience: [],
        newExperience: {
          title: "",
          period: "",
          company: "",
          location: "",
          description: "",
        },
      },
      Education: {
        allEducation: [],
        newEducation: {
          degree: "",
          period: "",
          institution: "",
          location: "",
        },
      },
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

  handleLanguageChange = (event) => {
    let changedProperty = this.state.Languages;
    changedProperty.newLanguage = event.target.value;
    this.setState({ Languages: changedProperty });
  };

  addLanguage = () => {
    const changedProperty = this.state.Languages;
    changedProperty.allLanguages.push(changedProperty.newLanguage);
    changedProperty.newLanguage = "";
    this.setState({ Languages: changedProperty });
  };

  deleteLanguage = (event) => {
    const changedProperty = this.state.Languages;
    const index = event.target.id.replace(/^\D+/g, "");
    changedProperty.allLanguages.splice(index, 1);
    this.setState({ Languages: changedProperty });
  };

  handleExperienceChange = (event) => {
    let changedProperty = this.state.Experience;
    changedProperty.newExperience[event.target.id] = event.target.value;
    this.setState({ Experience: changedProperty });
  };

  addExperience = () => {
    const changedProperty = this.state.Experience;
    changedProperty.allExperience.push(changedProperty.newExperience);
    changedProperty.newExperience = {
      title: "",
      period: "",
      company: "",
      location: "",
      description: "",
    };
    this.setState({ Experience: changedProperty });
  };

  deleteExperience = (event) => {
    const changedProperty = this.state.Experience;
    const index = event.target.id.replace(/^\D+/g, "");
    changedProperty.allExperience.splice(index, 1);
    this.setState({ Experience: changedProperty });
  };

  handleEducationChange = (event) => {
    let changedProperty = this.state.Education;
    changedProperty.newEducation[event.target.id] = event.target.value;
    this.setState({ Education: changedProperty });
  };

  addEducation = () => {
    const changedProperty = this.state.Education;
    changedProperty.allEducation.push(changedProperty.newEducation);
    changedProperty.newEducation = {
      degree: "",
      period: "",
      institution: "",
      location: "",
    };
    this.setState({ Education: changedProperty });
  };

  deleteEducation = (event) => {
    const changedProperty = this.state.Education;
    const index = event.target.id.replace(/^\D+/g, "");
    changedProperty.allEducation.splice(index, 1);
    this.setState({ Education: changedProperty });
  };

  togglePreviewMode = () => {
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
          handleLanguageChange={this.handleLanguageChange}
          addLanguage={this.addLanguage}
          deleteLanguage={this.deleteLanguage}
          handleExperienceChange={this.handleExperienceChange}
          addExperience={this.addExperience}
          deleteExperience={this.deleteExperience}
          handleEducationChange={this.handleEducationChange}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
        />
      </div>
    );
  }
}

export default App;

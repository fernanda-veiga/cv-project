import React, { Component } from "react";
import TopBar from "./components/TopBar";
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
        telephone: "",
        email: "",
        location: "",
        linkedin: "",
        github: "",
      },
    };
  }

  /*togglePreviewMode = (event) => {
    this.setState({ isPreviewMode: !this.state.isPreviewMode });
  };*/

  handleFormChange = (event) => {
    const changedProfileSection = this.state.profileSection;
    changedProfileSection[event.target.id] = event.target.value;
    this.setState({ profileSection: changedProfileSection });
  };

  render() {
    //const isPreviewMode = this.state.isPreviewMode;

    return (
      <div className="App">
        <TopBar />
        <div className="resume">
          <ProfileSection
            profileSection={this.state.profileSection}
            handleFormChange={this.handleFormChange}
          />
        </div>
      </div>
    );
  }
}

function ProfileSection(props) {
  const profileValues = Object.entries(props.profileSection);

  return (
    <form key="profile-form">
      {profileValues.map((entry, index) => {
        return (
          <input
            key={`profile-form-input-${index}`}
            id={entry[0]}
            type="text"
            value={entry[1]}
            placeholder={entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
            onChange={props.handleFormChange}
          ></input>
        );
      })}
    </form>
  );
}

/*function PreviewOrProfile(props) {
  console.log(props.isPreviewMode);
  if (props.isPreviewMode === true) {
    console.log("preview");
    return <div>{props.firstName}</div>;
  } else {
    return (
      <ProfileSection
        profileSection={props.profileSection}
        handleFormChange={props.handleFormChange}
      />
    );
  }
}*/

/*class Preview extends Component {
  render() {
    return <div>{this.props.firstName}</div>;
  }
}*/

/*class Profile extends Component {
  render() {
    return (
      <form>
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={this.props.firstName}
          onChange={this.props.handleFormChange}
        ></input>
      </form>
    );
  }
}*/

/*class Education extends Component {
  render() {
    return (
      <form>
        <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
  <input type="submit" value="Submit"></input>
      </form>
    )
  }
}*/

/*<label htmlFor="last-name">Last name:</label>
            <input type="text" id="last-name" name="last-name"></input>
            <label htmlFor="profession">Profession:</label>
            <input type="text" id="profession" name="profession"></input>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="citye"></input>
            <label htmlFor="country">Contry:</label>
            <input type="text" id="country" name="country"></input>
            <label htmlFor="email">Email:</label>
    <input type="text" id="email" name="email"></input>*/

export default App;

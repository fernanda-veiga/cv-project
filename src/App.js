import React, { Component } from "react";
import TopBar from "./components/TopBar";
import Resume from "./components/Resume";
import "./styles/App.css";
import "./styles/TopBar.css";
import "./styles/Resume.css";

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

  togglePreviewMode = () => {
    console.log(this.state.isPreviewMode);
    this.setState({ isPreviewMode: !this.state.isPreviewMode });
  };

  render() {
    return (
      <div className="App">
        <TopBar togglePreviewMode={this.togglePreviewMode} />
        <Resume state={this.state} />
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

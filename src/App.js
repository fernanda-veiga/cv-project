import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      isPreviewMode: false,
      /*lastName: "",
      profession: "",
      city: "",
      country: "",
      email: "",*/
    };
  }

  togglePreviewMode = (event) => {
    console.log(`toggle: ${this.state.isPreviewMode}`);
    this.setState({ isPreviewMode: !this.state.isPreviewMode });
    console.log(event.target.checked);
  };

  handleFormChange = (event) => {
    this.setState({ firstName: event.target.value });
    console.log(event.target.value);
  };

  render() {
    //const isPreviewMode = this.state.isPreviewMode;

    return (
      <div className="App">
        <div className="Profile">
          <PreviewOrProfile
            isPreviewMode={this.state.isPreviewMode}
            firstName={this.state.firstName}
            handleFormChange={this.handleFormChange}
          />
          <form>
            <label htmlFor="preview">Preview Mode:</label>
            <input
              type="checkbox"
              id="preview"
              name="preview"
              onChange={this.togglePreviewMode}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

function PreviewOrProfile(props) {
  console.log(props.isPreviewMode);
  if (props.isPreviewMode === true) {
    console.log("preview");
    return <div>{props.firstName}</div>;
  } else {
    console.log("not preview");
    return (
      <form>
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={props.firstName}
          onChange={props.handleFormChange}
        ></input>
      </form>
    );
  }
}

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

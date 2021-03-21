import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Profile">
          <form>
            <label htmlFor="first-name">First name:</label>
            <input type="text" id="first-name" name="first-name"></input>
            <label htmlFor="last-name">Last name:</label>
            <input type="text" id="last-name" name="last-name"></input>
            <label htmlFor="profession">Profession:</label>
            <input type="text" id="profession" name="profession"></input>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="citye"></input>
            <label htmlFor="country">Contry:</label>
            <input type="text" id="country" name="country"></input>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"></input>
          </form>
          <button type="button">Preview</button>
        </div>
        {/*<div className="Work">
          <form></form>
        </div>
        <div className="Education">
          <form></form>
    </div>*/}
      </div>
    );
  }
}

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

export default App;

import React, { Component } from 'react';

class TitleDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    fetch('/app/user')
      .then((response) => response.json())
      .then((userData) => this.setState({ user: userData }));
  }

  render() {
    // let firstName = this.state.user.firstName;
    // let lastName = this.state.user.lastName;
    // let capFirstName = firstName[0]
    // //let firstName =  .charAt(0).toUpperCase() + this.state.user.firstName.slice(1);
    // //let lastName = .charAt(0).toUpperCase() + this.state.user.lastName.slice(1);
    return (
      <div className="title">
        <div id="projectName">
          <p id="title1">tech</p>
          <p id="title2">STACK</p>
          <p id="title3">visualizer</p>
        </div>
        <p id="displayName">{this.state.user.firstName} {this.state.user.lastName}'s tech stack</p>
        <div id="userAndLogout">
          <p id="user">{this.state.user.username}</p>
          <button id="logout">Log Out</button>
        </div>
      </div>
    );
  }
}

export default TitleDisplay;

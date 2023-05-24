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
    console.log(this.state.user);
    return (
      <div class="title">
        <div id="projectName">
          <p id="title1">tech</p>
          <p id="title2">STACK</p>
          <p id="title3">visualizer</p>
        </div>
        <p id="displayName">{this.state.user.firstName} {this.state.user.lastName}</p>
        <div id="userAndLogout">
          <p id="user">{this.state.user.username}</p>
          <button id="logout">Log Out</button>
        </div>
      </div>
    );
  }
}

export default TitleDisplay;

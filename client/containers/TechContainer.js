import TechnologyCreator from '../components/TechnologyCreator.js';
import TechStackDisplay from '../components/TechStackDisplay';
import AcornDisplay from '../components/AcornDisplay';

import React, { Component } from 'react';
import { castObject } from '../../server/models/sessionModel.js';

class TechContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      technology: '',
      techArray: [],
      currLearning: '',
    };
    this.updateTechState = this.updateTechState.bind(this);
    this.addToLearning = this.addToLearning.bind(this);
    this.addToStack = this.addToStack.bind(this);
  }

  componentDidMount() {
    fetch('/app/user')
      .then((response) => response.json())
      .then((userData) =>
        this.setState({
          ...this.state,
          username: userData.username,
          techArray: userData.techStack,
          currLearning: userData.learning,
        })
      );
  }

  updateTechState(e) {
    console.log('e: ', e);
    this.setState({
      ...this.state,
      technology: e,
    });
  }

  addToLearning() {
    if (this.state.currLearning === '') {
      const obj = { currLearning: this.state.technology };
      fetch('/app/learning', {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) =>
          this.setState({
            ...this.state,
            technology: '',
            currLearning: data,
          })
        );
    }
  }

  addToStack() {
    if (this.state.currLearning !== '') {
      const obj = { technologyToAdd: this.state.currLearning };
      fetch('/app', {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp) => resp.json())
      .then((data) =>
        this.setState({
          ...this.state,
          technology: '',
          techArray: data.techStack,
          currLearning: '',
        })
      );
    }
    return;
  }

  render() {
    return (
      <div className="data">
        <TechnologyCreator
          updateTechState={this.updateTechState}
          addToLearning={this.addToLearning}
          addToStack={this.addToStack}
          newTechnology={this.state.technology}
          currLearning={this.state.currLearning}
        />
        <TechStackDisplay techArray={this.state.techArray} />
        <AcornDisplay />
      </div>
    );
  }
}

export default TechContainer;

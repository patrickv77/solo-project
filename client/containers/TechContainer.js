import TechnologyCreator from '../components/TechnologyCreator.js';
import TechStackDisplay from '../components/TechStackDisplay';
import AcornDisplay from '../components/AcornDisplay';

import React, { Component } from 'react';

class TechContainer extends Component {
  render() {
    return (
      <div>
        <TechnologyCreator />
        <p>tech creator, tech stack display!!!, acorn display</p>
        <TechStackDisplay />
        <p>DIDMOUNT, FETCH USER, DISPLAY CURRENT KNOWN TECHNOLOGIES, might have to edit SCHEMA to have LEARNING section (stretch feature)</p>
        <AcornDisplay />
        <p>acorn area for trolling idk</p>

      </div>
    )
  }
}

export default TechContainer;
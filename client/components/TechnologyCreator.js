import React from 'react';
import LearningDisplay from './LearningDisplay';
import TechnologyDisplay from './TechnologyDisplay';

//tech creator, tech stack display!!!, acorn display
const TechnologyCreator = (props) => {
  const {
    updateTechState,
    addToLearning,
    newTechnology,
    currLearning,
    addToStack,
  } = props;

  return (
    <div className="techCreator">
      <div id="centeringDiv" />
      <TechnologyDisplay
        updateTechState={updateTechState}
        addToLearning={addToLearning}
        newTechnology={newTechnology}
      />
      <LearningDisplay currLearning={currLearning} addToStack={addToStack} />
    </div>
  );
};

export default TechnologyCreator;

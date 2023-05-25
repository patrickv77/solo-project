import React from 'react';
import LearningDisplay from './LearningDisplay';
import TechnologyDisplay from './TechnologyDisplay';

//tech creator, tech stack display!!!, acorn display 
const TechnologyCreator = (props) => {
  const { updateTechState, addToLearning, newTechnology, currLearning} = props;

  return(
    <div className="techCreator">
      <TechnologyDisplay 
        updateTechState={updateTechState}
        addToLearning={addToLearning}
        newTechnology={newTechnology}
      />
      <LearningDisplay 
        currLearning={currLearning}
      />
    </div>
  )
}

export default TechnologyCreator;
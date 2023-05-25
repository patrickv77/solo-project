import React from 'react';

const LearningDisplay = (props) => {
  const { currLearning, addToStack } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToStack();
  };

  return (
    <div id="currentlyLearning">
      <p id="learningBox">Learning:</p>
      <p id="currTech">{currLearning}</p>
      <button onClick={(e) => handleSubmit(e)}>Add To Stack</button>
    </div>
  );
};

export default LearningDisplay;

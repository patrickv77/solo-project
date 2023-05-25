import React from 'react';

const TechnologyDisplay = (props) => {
  const { addToLearning, updateTechState, newTechnology } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToLearning();
    e.target.reset();
  };

  return (
    <div id="userInput">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={newTechnology}
          onChange={(e) => updateTechState(e.target.value)}
        />
        <button id="techButton" type="submit">
          Create Technology
        </button>
      </form>
    </div>
  );
};

export default TechnologyDisplay;

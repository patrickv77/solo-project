import React from 'react';

const TechnologyDisplay = (props) => {
  const { addToLearning, updateTechState, newTechnology } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToLearning();
  };

  return (
    <div id="userInput">
      <form onSubmit={handleSubmit}>
        <input
          value={newTechnology}
          onChange={(e) => updateTechState(e.target.value)}
        />
        <button id="techButton" type="submit">Create Technology</button>
      </form>
    </div>
  );
};

export default TechnologyDisplay;

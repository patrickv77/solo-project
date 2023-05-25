import React from 'react';

const TechnologyDisplay = (props) => {
  const { addToLearning, updateTechState, newTechnology} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToLearning();
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='input technology name here'
          value={newTechnology}
          onChange={(e) => updateTechState(e.target.value)}
        />
        <button type='submit'>Create Technology</button>
      </form>
    </div>
  )
}

export default TechnologyDisplay;
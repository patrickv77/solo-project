import React from 'react';

const LearningDisplay = (props) => {
  return (
    <div id="currentlyLearning">
      <p>Currently Learning</p>
      <p>{props.currLearning}</p>
      <button>Add To Stack</button>
    </div>
  )
}

export default LearningDisplay;
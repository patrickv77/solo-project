import React from 'react';
import TitleDisplay from '../containers/TitleDisplay';
import TechContainer from '../containers/TechContainer';

const App = () => {
  return (
    <div className='main'>
      <TitleDisplay />
      <TechContainer />
    </div>
  )
}

export default App;
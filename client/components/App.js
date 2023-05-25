import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import login from '../pages/login';
// import signup from '../pages/signup';
import TitleDisplay from '../containers/TitleDisplay';
import TechContainer from '../containers/TechContainer';

const App = () => {
  return (
    <div className="main">
      <TitleDisplay />
      <TechContainer />
    </div>
  );
};

export default App;

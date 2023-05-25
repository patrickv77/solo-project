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
// <Routes>
//       <Route
//         path="/"
//         element={

//           />
//       <Route path="/loginn" element={<login />} />
//       <Route path="/signup" element={<signup />} />
//     </Routes>

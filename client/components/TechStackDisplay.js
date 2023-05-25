import React from 'react';
import TechComponent from './TechComponent';

const TechStackDisplay = (props) => {
  const { techArray } = props;
  return (
    <div className="displayArea">
      {techArray.map((ele, i) => (
        <TechComponent
          key={i}
          tech={ele}
          randomNumber={Math.floor(Math.random() * (109 - 0) + 0)}
        />
      ))}
    </div>
  );
};

export default TechStackDisplay;

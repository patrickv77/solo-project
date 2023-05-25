import React from 'react';
import TechComponent from './TechComponent';

const TechStackDisplay = (props) => {
  const { techArray } = props;

  return (
    <div className="displayArea">
      {techArray.map((ele, i) => (
        <TechComponent key={i} tech={ele} />
      ))}
    </div>
  );
};

export default TechStackDisplay;

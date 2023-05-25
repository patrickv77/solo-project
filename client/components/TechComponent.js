import React from 'react';

const TechComponent = (props) => {
  const { tech } = props;

  return (
    <span className='tech'>{tech}</span>
  );
};

export default TechComponent;

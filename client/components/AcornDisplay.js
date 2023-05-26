import React from 'react';
import owen from '../public/images/owen.png';

const AcornDisplay = (props) => {
  //may not even recieve props?
  return (
    <div className="acorn">
      <a href="http://localhost:3000/acorn/willsentanceiswatching/ctri16BESTcohort/tbheveryoneiscoolthough/idliketothankjeenybrackletandcodesmith/shoutoutfellows">
        <img
          src="https://i.ibb.co/2gxfCKh/owen.png"
          id="owen"
          alt="owen"
          border="0"
        />
      </a>
    </div>
  );
};

export default AcornDisplay;

import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Body.scss';

const Body: React.FC = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <nav>
          <ul>
            <li>Pop</li>
            <li>Rock</li>
            <li>Metal</li>
            <li>Rap</li>
            <li>Electro</li>
            <li>Classic</li>
          </ul>
        </nav>
        <div className="player"></div>
        <div className="options">
          <div></div>
          <div></div>
        </div>
        <button>Next Level</button>
      </div>
    </div>
  );
};

export default Body;

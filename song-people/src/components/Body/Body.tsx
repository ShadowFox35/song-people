import React from 'react';
import { musicElemType } from '../../types/Objects';
import { musicArray } from '../../constants/musicArray';
// import { goodElemType } from '../../type/Objects';
import './Body.scss';

// interface BodyProps {
//   musicArray: musicElemType[];
// }

const Body: React.FC = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <nav>
          <ul>
            {musicArray.map((song: musicElemType) => (
              <li>{song.genre}</li>
            ))}
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

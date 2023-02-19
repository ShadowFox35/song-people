import React from 'react';
import {
  allSongsArray,
  genresArray,
} from '../../../constants/musicArray';
import './Levels.scss';

interface LevelsProps {
  levelNum: number;
  // score: number;
  // setScore: Function;
}

const Levels: React.FC<LevelsProps> = ({ levelNum }) => {
  return (
    <ul className="genres-list">
      {genresArray.map((genre: string, index) => (
        <li
          className={`genres-list_item ${
            index === levelNum && 'active'
          }`}>
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default Levels;

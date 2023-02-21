import React from 'react';
import { genresArray } from '../../../constants/musicArray';
import './Levels.scss';

interface LevelsProps {
  levelNum: number;
}

const Levels: React.FC<LevelsProps> = ({ levelNum }) => {
  return (
    <ul className="genres-list">
      {genresArray.map((genre: string, index: number) => (
        <li
          key={index}
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

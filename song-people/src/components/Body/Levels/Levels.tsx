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
      {genresArray.map((genre: string) => (
        <li
          className={`genres-list_item ${
            genre === allSongsArray[levelNum][0].genre &&
            'active'
          }`}>
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default Levels;

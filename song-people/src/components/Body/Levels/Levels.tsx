import React from 'react';
import { genresArray } from '../../../constants/musicArray';
import './Levels.scss';

// interface LevelsProps {
//   score: number;
//   setScore: Function;
// }

const Levels: React.FC = () => {
  return (
    <ul className="genres-list">
      {genresArray.map((genre: string) => (
        <li className="genres-list_item">{genre}</li>
      ))}
    </ul>
  );
};

export default Levels;

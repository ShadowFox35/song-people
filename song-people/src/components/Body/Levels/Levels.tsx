import React from 'react';
import { clsx } from 'clsx';
import { genresArray } from '../../../constants/musicArray';
import './Levels.scss';

interface LevelsProps {
  levelNum: number;
}

const Levels: React.FC<LevelsProps> = ({ levelNum }) => {
  return (
    <ul className="genres-list">
      {genresArray.map((genre: string, index: number) => (
        <li key={index} className={clsx('genres-list_item', { active: index === levelNum })}>
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default Levels;

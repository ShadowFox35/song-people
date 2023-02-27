import React from 'react';
import { clsx } from 'clsx';
import { genresArray } from '../../../constants/musicArray';
import './Levels.scss';
import { useSelector } from 'react-redux';

const Levels: React.FC = () => {
  const levelNum = useSelector((state: any) => state.gameOptionsRedicer.levelNum);

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

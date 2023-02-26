import React from 'react';
import { clsx } from 'clsx';
import './ButtonNext.scss';

interface BtnNextProps {
  levelNum: number;
  endLevel: boolean;
  setLevelNum: Function;
  setSelectedWrongList: Function;
  setClickedSong: Function;
}

const ButtonNext: React.FC<BtnNextProps> = ({ levelNum, endLevel, setLevelNum, setSelectedWrongList, setClickedSong }) => {
  const nextLevel = () => {
    setLevelNum(levelNum + 1);
    setSelectedWrongList([]);
    setClickedSong(null);
  };

  return (
    <button
      className={clsx('button-next', { disabled: !endLevel })}
      onClick={() => {
        if (endLevel) {
          nextLevel();
        }
      }}>
      Next Level
    </button>
  );
};

export default ButtonNext;

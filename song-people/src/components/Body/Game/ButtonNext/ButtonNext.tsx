import React from 'react';
import './ButtonNext.scss';

interface BtnNextProps {
  levelNum: number;
  endLevel: boolean;
  setLevelNum: Function;
  setSelectedWrongList: Function;
  setClickedSong: Function;
}

const ButtonNext: React.FC<BtnNextProps> = ({ levelNum, endLevel, setLevelNum, setSelectedWrongList, setClickedSong }) => {
  const appointLevel = () => {
    setLevelNum(levelNum + 1);
    setSelectedWrongList([]);
  };

  const nextLevel = () => {
    appointLevel();
    setClickedSong(null);
  };

  return (
    <button
      className={`button-next ${!endLevel && 'disabled'}`}
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

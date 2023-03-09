import React from 'react';
import { clsx } from 'clsx';
import './ButtonNext.scss';
import { useDispatch, useSelector } from 'react-redux';
import { levelNumRedicer } from '../../../../redux/action/gameOptions';
import { RootState } from '../../../../redux/store';

interface BtnNextProps {
  endLevel: boolean;
  setSelectedWrongList: Function;
  setClickedSong: Function;
}

const ButtonNext: React.FC<BtnNextProps> = ({ endLevel, setSelectedWrongList, setClickedSong }) => {
  const dispatch = useDispatch();
  const levelNum = useSelector((state: RootState) => state.gameOptionsRedicer.levelNum);

  const nextLevel = () => {
    dispatch(levelNumRedicer(levelNum + 1));
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

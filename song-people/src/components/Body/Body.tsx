import React from 'react';
import { allSongsArray } from '../../constants/musicArray';
import './Body.scss';
import Levels from './Levels/Levels';
import Game from './Game/Game';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Body: React.FC = () => {
  const levelNum = useSelector((state: RootState) => state.gameOptionsRedicer.levelNum);

  return (
    <main className="body">
      <div className="body_wrapper">
        <Levels />
        {levelNum === allSongsArray.length ? <Modal /> : <Game />}
      </div>
    </main>
  );
};

export default Body;

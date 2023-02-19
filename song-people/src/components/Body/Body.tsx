import React, { useState } from 'react';

import { allSongsArray } from '../../constants/musicArray';
import './Body.scss';
import './player.scss';

import Levels from './Levels/Levels';
import Game from './Game/Game';
import Modal from '../Modal/Modal';

const Body: React.FC = () => {
  const [levelNum, setLevelNum] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  return (
    <div className="body">
      <div className="body_wrapper">
        <Levels />
        {levelNum === allSongsArray.length ? (
          <Modal score={score} setScore={setScore} />
        ) : (
          <Game
            levelNum={levelNum}
            setLevelNum={setLevelNum}
          />
        )}
      </div>
    </div>
  );
};

export default Body;

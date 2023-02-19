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

  console.log('levelNum', levelNum);
  console.log(allSongsArray.length);
  console.log(levelNum === allSongsArray.length);

  return (
    <div className="body">
      <div className="body_wrapper">
        <Levels levelNum={levelNum} />
        {levelNum === allSongsArray.length ? (
          <Modal score={score} setScore={setScore} levelNum={levelNum}
          setLevelNum={setLevelNum}/>
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

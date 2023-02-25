import React, { useState } from 'react';
import { allSongsArray } from '../../constants/musicArray';
import './Body.scss';
import Levels from './Levels/Levels';
import Game from './Game/Game';
import Modal from '../Modal/Modal';
interface BodyProps {
  score: number;
  setScore: Function;
}

const Body: React.FC<BodyProps> = ({ score, setScore }) => {
  const [levelNum, setLevelNum] = useState<number>(0);
  return (
    <div className="body">
      <div className="body_wrapper">
        <Levels levelNum={levelNum} />
        {levelNum === allSongsArray.length ? (
          <Modal score={score} setScore={setScore} levelNum={levelNum} setLevelNum={setLevelNum} />
        ) : (
          <Game levelNum={levelNum} setLevelNum={setLevelNum} score={score} setScore={setScore} />
        )}
      </div>
    </div>
  );
};

export default Body;

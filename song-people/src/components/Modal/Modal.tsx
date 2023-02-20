import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Modal.scss';

interface ModalProps {
  score: number;
  setScore: Function;
  levelNum: number;
  setLevelNum: Function;
}

const Modal: React.FC<ModalProps> = ({
  setLevelNum,
  score,
  setScore,
}) => {
  const newGame = () => {
    setScore(0);
    setLevelNum(0);
  };

  return (
    <div className="modal">
      <div className="modal_message">Congrats</div>
      <div className="modal_score">
        You passed the quiz and scored {score} out of 30
        possible points
      </div>{' '}
      <button
        className="btn-new"
        onClick={() => {
          newGame();
        }}>
        Start new game{' '}
      </button>
    </div>
  );
};

export default Modal;

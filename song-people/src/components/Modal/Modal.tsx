import React from 'react';
import './Modal.scss';

interface ModalProps {
  score: number;
  setScore: Function;
  levelNum: number;
  setLevelNum: Function;
}

const Modal: React.FC<ModalProps> = ({ setLevelNum, score, setScore }) => {
  const newGame = () => {
    setScore(0);
    setLevelNum(0);
  };

  return (
    <div className="modal">
      <h2 className="modal_message">Congrats</h2>
      <p className="modal_score">You passed the quiz and scored {score} out of 30 possible points</p>{' '}
      <button className="btn-new" onClick={newGame}>
        Start new game{' '}
      </button>
    </div>
  );
};

export default Modal;

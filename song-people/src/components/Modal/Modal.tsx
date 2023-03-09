import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { levelNumRedicer, scoreRedicer } from '../../redux/action/gameOptions';
import { RootState } from '../../redux/store';
import './Modal.scss';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.gameOptionsRedicer.score);

  const newGame = () => {
    dispatch(scoreRedicer(0));
    dispatch(levelNumRedicer(0));
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

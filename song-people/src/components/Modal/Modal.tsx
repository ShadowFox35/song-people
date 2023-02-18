import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Modal.scss';

interface ModalProps {
  score: number;
  setScore: Function;
}

const Modal: React.FC<ModalProps> = ({
  score,
  setScore,
}) => {
  return (
    <div className="body">
      <div className="wrapper">
        {' '}
        <button className="basket-btn">Modal </button>
      </div>
    </div>
  );
};

export default Modal;

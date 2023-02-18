import React from 'react';
import './Levels.scss';

interface LevelsProps {
  score: number;
  setScore: Function;
}

const Levels: React.FC<LevelsProps> = ({
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

export default Levels;

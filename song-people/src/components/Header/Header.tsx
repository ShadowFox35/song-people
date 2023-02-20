import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Header.scss';

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <div className="header">
      <div className="wrapper">
        <p className="title">SongPeople</p>
        <div className="score">score: {score}</div>
      </div>
    </div>
  );
};

export default Header;

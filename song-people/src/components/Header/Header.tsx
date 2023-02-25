import React from 'react';
import './Header.scss';

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <div className="header">
      <div className="wrapper">
        <h1 className="title">SongPeople</h1>
        <p className="score">score: {score}</p>
      </div>
    </div>
  );
};

export default Header;

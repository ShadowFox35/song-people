import React from 'react';
import './Header.scss';

interface HeaderProps {
  score: number;
}

const Header: React.FC<HeaderProps> = ({ score }) => {
  return (
    <header className="header">
      <h1 className="title">SongPeople</h1>
      <p className="score">score: {score}</p>
    </header>
  );
};

export default Header;

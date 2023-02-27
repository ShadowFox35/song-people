import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header: React.FC = () => {
  const score = useSelector((state: any) => state.gameOptionsRedicer.score);

  return (
    <header className="header">
      <h1 className="title">SongPeople</h1>
      <p className="score">score: {score}</p>
    </header>
  );
};

export default Header;

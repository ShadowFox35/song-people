import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <p className="title">SongPeople</p>
        <div className="score">score: 0</div>
      </div>
    </div>
  );
};

export default Header;

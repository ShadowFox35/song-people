import React from 'react';
import { navElemType } from '../../types/Objects';
import { musicArray } from '../../constants/musicArray';
// import { goodElemType } from '../../type/Objects';
import './Body.scss';

// interface BodyProps {
//   musicArray: navElemType[];
// }

const Body: React.FC = () => {
  return (
    <div className="body">
      <div className="body_wrapper">
        <ul className="genres-list">
          {musicArray.map((song: navElemType) => (
            <li className="genres-list_item">
              {song.genre}
            </li>
          ))}
        </ul>
        <div className="game">
          <div className="player">
            <img
              src={`${process.env.PUBLIC_URL}/assets/song_images/Zefirka.svg`}
              alt=""
            />
            <div className="player_wrapper">
              здесь будет кастомный плеер
            </div>
          </div>
          <div className="options">
            <div className="artists">Леди Гага</div>
            <div className="info">
              <img
                className="info_img"
                src={`${process.env.PUBLIC_URL}/assets/song_images/Zefirka.svg`}
                alt=""
              />
              <p className="info_text">
                инфо об исполнителе
              </p>
            </div>
          </div>
        </div>
        <button>Next Level</button>
      </div>
    </div>
  );
};

export default Body;

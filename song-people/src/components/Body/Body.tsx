import React, { useEffect, useRef } from 'react';
import { navElemType } from '../../types/Objects';
import { musicArray } from '../../constants/musicArray';
// import { goodElemType } from '../../type/Objects';
import './Body.scss';
import './player.scss';
import AudioPlayer from 'react-h5-audio-player';

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
              className="player_img"
              src={`${process.env.PUBLIC_URL}/assets/song_images/Zefirka.svg`}
              alt=""
            />
            <div className="player_wrapper">
              <AudioPlayer
                src={`${process.env.PUBLIC_URL}/assets/music/BillieEilish.mp3`}
                customAdditionalControls={[]}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
              />
            </div>
          </div>
          <div className="options">
            <div className="options_wrapper">
              {' '}
              <div className="artists">
                <ul className="artists_list">
                  <li className="artists_list_item">
                    Lorem, ipsum.
                  </li>
                  <li className="artists_list_item">
                    Lorem, ipsum.
                  </li>
                  <li className="artists_list_item">
                    Lorem, ipsum.
                  </li>
                  <li className="artists_list_item">
                    Lorem, ipsum.
                  </li>
                  <li className="artists_list_item">
                    Lorem, ipsum.
                  </li>
                </ul>
              </div>
              <div className="info">
                <img
                  className="info_img"
                  src={`${process.env.PUBLIC_URL}/assets/song_images/Zefirka.svg`}
                  alt=""
                />
                <p className="info_text">
                  инфо об исполнителе Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit, amet consectetur
                  adipisicing elit. Accusantium omnis animi
                  delectus. Quibusdam, quidem ad? Tempore.
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, nulla?
                  Consequuntur tempora dolorem nemo
                  accusamus! Lorem ipsum dolor sit amet
                  consectetur adipisicing. Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="button-next">Next Level</button>
      </div>
    </div>
  );
};

export default Body;

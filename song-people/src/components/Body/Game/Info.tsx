import React from 'react';
import { musicElemType } from '../../../types/Objects';
import './Info.scss';

interface InfoProps {
  clickedSong: musicElemType;
  setClickedSong: Function;
}

const Info: React.FC<InfoProps> = ({
  clickedSong,
  setClickedSong,
}) => {
  return (
    <div className="info">
      <img
        className="info_img"
        src={`${process.env.PUBLIC_URL}/assets/song_images/${clickedSong.img}`}
        alt=""
      />
      <p className="info_text">{clickedSong.info}</p>
    </div>
  );
};

export default Info;

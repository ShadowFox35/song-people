import React from 'react';
import { musicElemType } from '../../../../types/Objects';
import './Info.scss';

interface InfoProps {
  song: musicElemType;
  clickedSong: musicElemType;
  selectedWrongList: musicElemType[];
}

const Info: React.FC<InfoProps> = ({
  song,
  clickedSong,
  selectedWrongList,
}) => {
  return (
    <div className="info">
      <img
        className="info_img"
        src={`${
          process.env.PUBLIC_URL
        }/assets/song_images/${
          clickedSong === song ||
          selectedWrongList.length === 4
            ? song.img
            : clickedSong.img
        }`}
        alt=""
      />
      <p className="info_text">{clickedSong.info}</p>
    </div>
  );
};

export default Info;

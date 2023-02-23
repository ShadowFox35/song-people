import React from 'react';
import { allSongsArray } from '../../../../constants/musicArray';
import { musicElemType } from '../../../../types/Objects';
import './Info.scss';

interface InfoProps {
  song: musicElemType;
  clickedSong: musicElemType;
  selectedWrongList: musicElemType[];

  levelNum: number;
}

const Info: React.FC<InfoProps> = ({
  song,
  clickedSong,
  selectedWrongList,
  levelNum,
}) => {
  return (
    <div className="info">
      <img
        className="info_img"
        src={`${
          process.env.PUBLIC_URL
        }/assets/song_images/${
          clickedSong === song ||
          selectedWrongList.length ===
            allSongsArray[levelNum].length - 1
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

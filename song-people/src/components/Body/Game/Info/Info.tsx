import React from 'react';
import { allSongsArray } from '../../../../constants/musicArray';
import { musicElemType } from '../../../../types/Objects';
import './Info.scss';

interface InfoProps {
  song: musicElemType | null;
  clickedSong: musicElemType | null;
  selectedWrongList: musicElemType[];

  levelNum: number;
}

const Info: React.FC<InfoProps> = ({ song, clickedSong, selectedWrongList, levelNum }) => {
  const appointImg = () => {
    if ((clickedSong && song && clickedSong === song) || selectedWrongList.length === allSongsArray[levelNum].length - 1) {
      return song?.img;
    } else if (clickedSong) {
      return clickedSong?.img;
    } else {
      return '/startImg.jpg';
    }
  };

  const appoinText = () => {
    return clickedSong ? clickedSong.info : 'Please listen to the song and choose the right artist';
  };

  return (
    <div className="info">
      <img className="info_img" src={`${process.env.PUBLIC_URL}/assets/song_images/${appointImg()}`} alt="artist" />
      <p className="info_text">{appoinText()}</p>
    </div>
  );
};

export default Info;

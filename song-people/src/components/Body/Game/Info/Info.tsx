import React from 'react';
import { musicElemType } from '../../../../types/Objects';
import './Info.scss';

interface InfoProps {
  song: musicElemType | null;
  clickedSong: musicElemType | null;
  endLevel: boolean;
}

const Info: React.FC<InfoProps> = ({ song, clickedSong,  endLevel }) => {
  const appointImg = () => {
    if (endLevel) {
      return song?.img;
    } else if (clickedSong) {
      return clickedSong?.img;
    } else {
      return '/startImg.jpg';
    }
  };

  const appoinText = () => {
    if (endLevel) {
      return song?.info;
    } else if (clickedSong) {
      return clickedSong?.info;
    } else {
      return 'Please listen to the song and choose the right artist';
    }
  };

  return (
    <div className="info">
      <img className="info_img" src={`${process.env.PUBLIC_URL}/assets/song_images/${appointImg()}`} alt="artist" />
      <p className="info_text">{appoinText()}</p>
    </div>
  );
};

export default Info;

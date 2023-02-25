import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { musicElemType } from '../../../../types/Objects';
import './Player.scss';

interface PlayerProps {
  song: musicElemType | null;
  endLevel: boolean;
}

const Player: React.FC<PlayerProps> = ({ song, endLevel }) => {
  const appoinClass = () => {
    return endLevel ? song?.img : 'startImg.jpg';
  };

  return (
    <div className="player">
      <img className="player_img" src={`${process.env.PUBLIC_URL}/assets/song_images/${appoinClass()}`} alt="artist" />
      <div className="player_wrapper">
        {song?.audio && (
          <AudioPlayer
            src={`${process.env.PUBLIC_URL}/assets/music/${song?.audio}`}
            customAdditionalControls={[]}
            showJumpControls={false}
            autoPlayAfterSrcChange={false}
            volume={0.5}
          />
        )}
      </div>
    </div>
  );
};

export default Player;

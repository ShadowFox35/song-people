import React, { useEffect, useMemo, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { musicElemType } from '../../../types/Objects';
import Artists from './Artists/Artists';
import Info from './Info/Info';
import { allSongsArray } from '../../../constants/musicArray';
import './Game.scss';

interface GameProps {
  levelNum: number;
  setLevelNum: Function;
  score: number;
  setScore: Function;
}

const Game: React.FC<GameProps> = ({ levelNum, setLevelNum, score, setScore }) => {
  const [selectedWrongList, setSelectedWrongList] = useState<musicElemType[]>([]);
  const [song, setSong] = useState<musicElemType | null>(null);

  const [clickedSong, setClickedSong] = useState<musicElemType | null>(null);

  const nextLevel = () => {
    appointLevel();
    setClickedSong(null);
  };

  const appointLevel = () => {
    setLevelNum(levelNum + 1);
    setSelectedWrongList([]);
  };

  const appointRandomSong = () => {
    let randomSong = Math.floor(Math.random() * allSongsArray[levelNum].length);
    setSong(allSongsArray[levelNum][randomSong]);
  };

  useEffect(() => {
    appointRandomSong();
  }, [levelNum]);

  const endLevel = useMemo(() => selectedWrongList.length === allSongsArray[levelNum].length - 1, [song, selectedWrongList]);

  const appoinClass = () => {
    return endLevel ? song?.img : 'startImg.jpg';
  };

  return (
    <div className="game">
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
      <div className="options">
        <div className="options_wrapper">
          {' '}
          <Artists
            song={song}
            levelNum={levelNum}
            selectedWrongList={selectedWrongList}
            setSelectedWrongList={setSelectedWrongList}
            setClickedSong={setClickedSong}
            score={score}
            setScore={setScore}
            endLevel={endLevel}
          />
          <Info clickedSong={clickedSong} song={song} endLevel={endLevel} />
        </div>
      </div>
      <button
        className={`button-next ${!endLevel && 'disabled'}`}
        onClick={() => {
          if (endLevel) {
            nextLevel();
          }
        }}>
        Next Level
      </button>
    </div>
  );
};

export default Game;

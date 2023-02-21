import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { musicElemType } from '../../../types/Objects';
import Artists from './Artists/Artists';
import Info from './Info/Info';
import {
  allSongsArray,
  startMessage,
} from '../../../constants/musicArray';
import './Game.scss';

interface GameProps {
  levelNum: number;
  setLevelNum: Function;
  score: number;
  setScore: Function;
}

const Game: React.FC<GameProps> = ({
  levelNum,
  setLevelNum,
  score,
  setScore,
}) => {
  const [selectedWrongList, setSelectedWrongList] =
    useState<musicElemType[]>([]);
  const [disableStart, setDisableStart] =
    useState<boolean>(true);
  const [song, setSong] = useState<musicElemType>(
    allSongsArray[0][0]
  );

  const [clickedSong, setClickedSong] =
    useState<musicElemType>(startMessage[0]);

  const startGame = () => {
    chooseLevel();
    setDisableStart(true);
    setClickedSong(startMessage[0]);
  };

  const chooseLevel = () => {
    setLevelNum(levelNum + 1);
    setSelectedWrongList([]);
  };

  const appointRandomSong = () => {
    let randomSong = Math.floor(
      Math.random() * allSongsArray[levelNum].length
    );
    setSong(allSongsArray[levelNum][randomSong]);
  };

  useEffect(() => {
    appointRandomSong();
  }, [levelNum]);

  return (
    <div className="game">
      <div className="player">
        <img
          className="player_img"
          src={`${
            process.env.PUBLIC_URL
          }/assets/song_images/${
            clickedSong === song ||
            selectedWrongList.length === 4
              ? song.img
              : startMessage[0].img
          }`}
          alt=""
        />
        <div className="player_wrapper">
          {song.audio && (
            <AudioPlayer
              src={`${process.env.PUBLIC_URL}/assets/music/${song.audio}`}
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
            disableStart={disableStart}
            setDisableStart={setDisableStart}
            score={score}
            setScore={setScore}
          />
          <Info
            clickedSong={clickedSong}
            song={song}
            selectedWrongList={selectedWrongList}
          />
        </div>
      </div>
      <button
        className={`button-next ${
          disableStart && 'disabled'
        }`}
        onClick={() => {
          if (!disableStart) {
            startGame();
          }
        }}>
        Next Level
      </button>
    </div>
  );
};

export default Game;

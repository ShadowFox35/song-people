import React, { useState, useEffect, useRef } from 'react';
import { musicElemType } from '../../types/Objects';
import {
  genresArray,
  allSongsArray,
} from '../../constants/musicArray';
// import { goodElemType } from '../../type/Objects';
import './Body.scss';
import './player.scss';
import AudioPlayer from 'react-h5-audio-player';

const Body: React.FC = () => {
  const [levelNum, setLevelNum] = useState<number>(0);
  const [disableStart, setDisableStart] =
    useState<boolean>(false);
  const [selectedSongList, setSelectedSongList] = useState<
    musicElemType[]
  >([]);
  const [song, setSong] = useState<musicElemType>(
    allSongsArray[0][0]
  );

  const startGame = () => {
    chooseLevel();
    setDisableStart(true);
  };

  const chooseLevel = () => {
    setLevelNum((prev) => prev + 1);
  };

  const appointRandomSong = () => {
    console.log('appointRandomSong');
    console.log(levelNum);

    let randomSong = Math.floor(
      Math.random() * allSongsArray[levelNum].length
    );
    setSong(allSongsArray[levelNum][randomSong]);
  };

  useEffect(() => {
    console.log('useEffect');
    appointRandomSong();
  }, [levelNum]);

  const checkAnswer = (answer: musicElemType) => {
    if (answer.artist === song.artist) {
      answerRight();
    } else {
      answerWrong();
      let list = [...selectedSongList];
      list.push(answer);
      setSelectedSongList(list); //добавление выбранного неправильного ответа в массив
    }
  };

  const answerWrong = () => {
    console.log('answerWrong');
  };

  const answerRight = () => {
    console.log('answerRight levelNum', levelNum);
    setDisableStart(false);
  };

  return (
    <div className="body">
      <div className="body_wrapper">
        <ul className="genres-list">
          {genresArray.map((genre: string) => (
            <li className="genres-list_item">{genre}</li>
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
              {song.audio && (
                <AudioPlayer
                  src={`${process.env.PUBLIC_URL}/assets/music/${song.audio}`}
                  customAdditionalControls={[]}
                  showJumpControls={false}
                  autoPlayAfterSrcChange={false}
                />
              )}
            </div>
          </div>
          <div className="options">
            <div className="options_wrapper">
              {' '}
              <div className="artists">
                <ul className="artists_list">
                  {allSongsArray[levelNum].map(
                    (song: musicElemType) => (
                      <li
                        className={`artists_list_item ${
                          selectedSongList.includes(song) &&
                          'clicked'
                        }`}
                        onClick={() => {
                          if (
                            !selectedSongList.includes(song)
                          ) {
                            checkAnswer(song);
                          }
                        }}>
                        {song.artist}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="info">
                <img
                  className="info_img"
                  src={`${process.env.PUBLIC_URL}/assets/song_images/${song.img}`}
                  alt=""
                />
                <p className="info_text">{song.info}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="button-next"
          onClick={() => {
            if (!disableStart) {
              startGame();
            }
          }}>
          Next Level
        </button>
      </div>
    </div>
  );
};

export default Body;

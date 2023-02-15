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
  // const [level, setLevel] = useState<string>(
  //   allSongsArray[0][0].genre
  // );

  const [levelNum, setLevelNum] = useState<number>(0);
  const [selectedSongList, setSelectedSongList] = useState<
    musicElemType[]
  >([]);
  const [song, setSong] = useState<musicElemType>(
    allSongsArray[0][0]
  );
  // const [popArray, rockArray] = allSongsArray;

  const startGame = () => {
    chooseLevel();
  };

  const chooseLevel = () => {
    console.log('chooseLevel');
  };

  // const gameArray: musicElemType[] = [];

  const appointRandomSong = () => {
    console.log(
      'allSongsArray[levelNum]',
      allSongsArray[levelNum]
    );
    let randomSong = Math.floor(
      Math.random() * allSongsArray[levelNum].length
    );
    setSong(allSongsArray[levelNum][randomSong]);
    // console.log('allSongsArray[levelNum]', allSongsArray[levelNum]);
  };

  useEffect(() => {
    appointRandomSong();
  }, allSongsArray[levelNum]);

  const checkAnswer = (answer: musicElemType) => {
    console.log('checkAnswer', answer);
    let answersArray: musicElemType[] = [];

    if (answer.artist === song.artist) {
      answerRight();
    } else {
      answerWrong();
      answersArray.push(answer);
      console.log('answersArray', answersArray);
      setSelectedSongList(answersArray);
    }
  };

  const answerWrong = () => {
    console.log('answerWrong');
  };

  const answerRight = () => {
    setLevelNum((prev) => prev + 1);
    console.log('answerRight levelNum', levelNum);
    appointRandomSong();
  };

  return (
    <div className="body">
      <div className="body_wrapper">
        <ul className="genres-list">
          {genresArray.map((genre: string) => (
            <li className="genres-list_item">{genre}</li>
          ))}
        </ul>
        {/* {popArray.map((song: musicElemType) => ( */}
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
                    (
                      song: musicElemType,
                      index: number
                    ) => (
                      <li
                        className="artists_list_item"
                        // disabled = {selectedSongList.includes(song)}

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
        {/* ))} */}
        <button
          className="button-next"
          onClick={() => startGame()}>
          Next Level
        </button>
      </div>
    </div>
  );
};

export default Body;

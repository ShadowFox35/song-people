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
  const [level, setLevel] = useState<string>(
    genresArray[0]
  );
  // const [popArray, rockArray] = allSongsArray;

  const [song, setSong] = useState<musicElemType>(
    allSongsArray[0][0]
  );

  const startGame = () => {
    appointRandomSong();
    chooseLevel();
  };

  const chooseLevel = () => {
    console.log('chooseLevel');
  };

  // const gameArray: musicElemType[] = [];

  const appointRandomSong = () => {
    let randomSong = Math.floor(
      Math.random() * allSongsArray[0].length
    );
    setSong(allSongsArray[0][randomSong]);
    console.log('appointRandomSong', song);
  };

  const checkAnswer = (answer: string) => {
    console.log('checkAnswer', answer);
    if (answer === song.artist) {
      answerRight();
    } else {
      answerWrong();
    }
  };

  const answerWrong = () => {
    console.log('answerWrong');
  };

  const answerRight = () => {
    console.log('answerRight');
  };

  return (
    <div className="body">
      <div className="body_wrapper">
        <ul className="genres-list">
          {genresArray.map((song: string) => (
            <li className="genres-list_item">{song}</li>
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
              <AudioPlayer
                src={`${process.env.PUBLIC_URL}/assets/music/${song.audio}`}
                customAdditionalControls={[]}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
              />
            </div>
          </div>
          <div className="options">
            <div className="options_wrapper">
              {' '}
              <div className="artists">
                <ul className="artists_list">
                  {allSongsArray[0].map(
                    (song: musicElemType) => (
                      <li
                        className="artists_list_item"
                        onClick={() =>
                          checkAnswer(song.artist)
                        }>
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

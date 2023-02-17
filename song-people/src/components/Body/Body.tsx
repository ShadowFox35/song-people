import React, { useState, useEffect, useRef } from 'react';
import { musicElemType } from '../../types/Objects';
import {
  genresArray,
  allSongsArray,
  startMessage,
} from '../../constants/musicArray';
// import { goodElemType } from '../../type/Objects';
import './Body.scss';
import './player.scss';
import AudioPlayer from 'react-h5-audio-player';

const Body: React.FC = () => {
  const [levelNum, setLevelNum] = useState<number>(0);
  const [disableStart, setDisableStart] =
    useState<boolean>(true);
  const [selectedWrongList, setSelectedWrongList] =
    useState<musicElemType[]>([]);
  // const [selectedRightList, setsSelectedRightList] =
  //   useState<musicElemType[]>([]);
  // const [answerStatus, setAnswerStatus] =
  //   useState<boolean>(false);

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
    setLevelNum((prev) => prev + 1);
    setSelectedWrongList([]);
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
    setClickedSong(answer);

    if (answer.artist === song.artist) {
      answerRight(answer);
    } else {
      answerWrong(answer);
    }
  };

  const answerWrong = (answer: musicElemType) => {
    console.log('answerWrong');
    let list = [...selectedWrongList];
    list.push(answer);
    setSelectedWrongList(list); //добавление выбранного неправильного ответа в массив
  };

  const answerRight = (answer: musicElemType) => {
    console.log('answerRight levelNum', levelNum);
    // setAnswerStatus(true);
    // allSongsArray[levelNum].forEach((elem) => {
    //   if (
    //     !selectedWrongList.includes(elem) &&
    //     elem !== answer
    //   ) {
    //     let list = [...selectedWrongList];
    //     list.push(elem);
    //     setSelectedWrongList(list);
    //   }
    // });
    setDisableStart(false);
    let list = allSongsArray[levelNum].filter(
      (elem) => elem !== answer
    );
    setSelectedWrongList(list);
    console.log('list', selectedWrongList);
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
                    (songInList: musicElemType) => (
                      <li
                        className={`artists_list_item ${
                          selectedWrongList.includes(
                            songInList
                          ) && 'answer-wrong'
                          // (answerStatus === true)&&'answer-right'
                        } ${
                          selectedWrongList.length === 4 &&
                          !selectedWrongList.includes(
                            songInList
                          ) &&
                          'answer-right'
                        }`}
                        onClick={() => {
                          if (
                            !selectedWrongList.includes(
                              songInList
                            ) &&
                            selectedWrongList.length !== 4
                          ) {
                            checkAnswer(songInList);
                            console.log('li onClick');
                          }
                        }}>
                        {songInList.artist}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="info">
                <img
                  className="info_img"
                  src={`${process.env.PUBLIC_URL}/assets/song_images/${clickedSong.img}`}
                  alt=""
                />
                <p className="info_text">
                  {clickedSong.info}
                </p>
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

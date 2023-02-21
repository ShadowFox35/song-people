import React, { useState } from 'react';
import useSound from 'use-sound';
import {
  allSongsArray,
  startMessage,
} from '../../../constants/musicArray';
import { musicElemType } from '../../../types/Objects';
import './Artists.scss';

interface ModalProps {
  song: musicElemType;
  levelNum: number;
  setLevelNum: Function;
  selectedWrongList: musicElemType[];
  setSelectedWrongList: Function;
  clickedSong: musicElemType;
  setClickedSong: Function;
  disableStart: boolean;
  setDisableStart: Function;
  score: number;
  setScore: Function;
}

const Artists: React.FC<ModalProps> = ({
  song,
  levelNum,
  setLevelNum,
  selectedWrongList,
  setSelectedWrongList,
  clickedSong,
  setClickedSong,
  disableStart,
  setDisableStart,
  score,
  setScore,
}) => {
  const [rightSound] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/rightAnswerSound.mp3`
  );
  const [wrongSound] = useSound(
    `${process.env.PUBLIC_URL}/assets/sounds/wrongAnswerSound.mp3`
  );

  const checkAnswer = (answer: musicElemType) => {
    setClickedSong(answer);

    if (answer.artist === song.artist) {
      answerRight(answer);
    } else {
      answerWrong(answer);
    }
  };

  const answerWrong = (answer: musicElemType) => {
    wrongSound();
    let list = [...selectedWrongList];
    list.push(answer);
    setSelectedWrongList(list);
    if (selectedWrongList.length === 3) {
      setDisableStart(false);
    }
  };

  const answerRight = (answer: musicElemType) => {
    rightSound();
    setDisableStart(false);
    let list = allSongsArray[levelNum].filter(
      (elem) => elem !== answer
    );
    setSelectedWrongList(list);
    setScore(score + 5 - selectedWrongList.length);
  };

  return (
    <div className="artists">
      <ul className="artists_list">
        {allSongsArray[levelNum].map(
          (songInList: musicElemType) => (
            <li
              className={`artists_list_item ${
                selectedWrongList.includes(songInList) &&
                'answer-wrong'
              } ${
                selectedWrongList.length === 4 &&
                !selectedWrongList.includes(songInList) &&
                'answer-right'
              }`}
              onClick={() => {
                if (
                  !selectedWrongList.includes(songInList) &&
                  selectedWrongList.length !== 4
                ) {
                  checkAnswer(songInList);
                }
              }}>
              {songInList.artist}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Artists;

import useSound from 'use-sound';
import { allSongsArray } from '../../../../constants/musicArray';
import { musicElemType } from '../../../../types/Objects';
import './Artists.scss';

interface ModalProps {
  song: musicElemType | null;
  levelNum: number;
  selectedWrongList: musicElemType[];
  setSelectedWrongList: Function;
  setClickedSong: Function;
  disableStart: boolean;
  setDisableStart: Function;
  score: number;
  setScore: Function;
  endLevel: boolean;
}

const Artists: React.FC<ModalProps> = ({
  song,
  levelNum,
  selectedWrongList,
  setSelectedWrongList,
  setClickedSong,
  setDisableStart,
  score,
  setScore,
  endLevel,
}) => {
  const [rightSound] = useSound(`${process.env.PUBLIC_URL}/assets/sounds/rightAnswerSound.mp3`);
  const [wrongSound] = useSound(`${process.env.PUBLIC_URL}/assets/sounds/wrongAnswerSound.mp3`);

  const checkAnswer = (answer: musicElemType) => {
    if (!selectedWrongList.includes(answer) && selectedWrongList.length !== allSongsArray[levelNum].length - 1) {
      setClickedSong(answer);
    }

    if (answer.artist === song?.artist) {
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
    let list = allSongsArray[levelNum].filter((elem) => elem !== answer);
    setSelectedWrongList(list);
    setScore(score + 5 - selectedWrongList.length);
  };

  const appoinClass = (songInList: musicElemType) => {
    if (selectedWrongList.includes(songInList)) {
      return 'answer-wrong';
    } else if (endLevel && !selectedWrongList.includes(songInList)) {
      return 'answer-right';
    }
  };

  return (
    <div className="artists">
      <ul className="artists_list">
        {allSongsArray[levelNum].map((songInList: musicElemType, index: number) => (
          <li
            key={index}
            className={`artists_list_item ${appoinClass(songInList)}`}
            onClick={() => {
              checkAnswer(songInList);
            }}>
            {songInList.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;

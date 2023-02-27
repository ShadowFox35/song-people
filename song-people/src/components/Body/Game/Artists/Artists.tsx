import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import { allSongsArray } from '../../../../constants/musicArray';
import { scoreRedicer } from '../../../../redux/action/gameOptions';
import { musicElemType } from '../../../../types/Objects';
import './Artists.scss';

interface ModalProps {
  song: musicElemType | null;
  selectedWrongList: musicElemType[];
  setSelectedWrongList: Function;
  setClickedSong: Function;
  endLevel: boolean;
}

const Artists: React.FC<ModalProps> = ({ song, selectedWrongList, setSelectedWrongList, setClickedSong, endLevel }) => {
  const dispatch = useDispatch();
  const levelNum = useSelector((state: any) => state.gameOptionsRedicer.levelNum);
  const score = useSelector((state: any) => state.gameOptionsRedicer.score);

  const [rightSound] = useSound(`${process.env.PUBLIC_URL}/assets/sounds/rightAnswerSound.mp3`);
  const [wrongSound] = useSound(`${process.env.PUBLIC_URL}/assets/sounds/wrongAnswerSound.mp3`);

  const checkAnswer = (answer: musicElemType) => {
    if (!selectedWrongList.includes(answer) && !endLevel) {
      setClickedSong(answer);
    }

    if (answer.artist === song?.artist) {
      answerRight(answer);
    } else {
      answerWrong(answer);
    }
  };

  const answerWrong = (answer: musicElemType) => {
    let list = [...selectedWrongList];
    !selectedWrongList.includes(answer) && list.push(answer) && wrongSound();
    setSelectedWrongList(list);
  };

  const answerRight = (answer: musicElemType) => {
    rightSound();
    let list = allSongsArray[levelNum].filter((elem) => elem !== answer);
    setSelectedWrongList(list);
    dispatch(scoreRedicer(score + 5 - selectedWrongList.length));
  };

  const appoinClass = (songInList: musicElemType) => {
    if (selectedWrongList.includes(songInList)) {
      return 'answer-wrong';
    } else if (endLevel && !selectedWrongList.includes(songInList)) {
      return 'answer-right';
    }
    return '';
  };

  return (
    <section className="artists">
      <ul className="artists_list">
        {allSongsArray[levelNum].map((songInList: musicElemType, index: number) => (
          <li
            key={index}
            className={`artists_list_item ${appoinClass(songInList)}`}
            onClick={() => {
              !endLevel && checkAnswer(songInList);
            }}>
            {songInList.artist}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Artists;

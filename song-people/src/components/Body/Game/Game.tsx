import React, { useEffect, useMemo, useState } from 'react';

import { musicElemType } from '../../../types/Objects';
import Artists from './Artists/Artists';
import Info from './Info/Info';
import { allSongsArray } from '../../../constants/musicArray';
import './Game.scss';
import Player from './Player/Player';
import ButtonNext from './ButtonNext/ButtonNext';

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

  const appointRandomSong = () => {
    let randomSong = Math.floor(Math.random() * allSongsArray[levelNum].length);
    setSong(allSongsArray[levelNum][randomSong]);
  };

  useEffect(() => {
    appointRandomSong();
  }, [levelNum]);

  const endLevel = useMemo(() => selectedWrongList.length === allSongsArray[levelNum].length - 1, [song, selectedWrongList, levelNum]);

  return (
    <div className="game">
      <Player song={song} endLevel={endLevel} />
      <section className="options">
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
      </section>
      <ButtonNext
        levelNum={levelNum}
        endLevel={endLevel}
        setLevelNum={setLevelNum}
        setSelectedWrongList={setSelectedWrongList}
        setClickedSong={setClickedSong}
      />
    </div>
  );
};

export default Game;

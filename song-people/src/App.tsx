import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import { allSongsArray } from './constants/musicArray';

// import { goodElemType } from './type/Objects';

function App() {
  const [levelNum, setLevelNum] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  console.log('levelNum', levelNum);

  return (
    <>
      <div className="container">
        <Header />
        {levelNum === allSongsArray.length ? (
          <Modal score={score} setScore={setScore} />
        ) : (
          <Body
            levelNum={levelNum}
            setLevelNum={setLevelNum}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

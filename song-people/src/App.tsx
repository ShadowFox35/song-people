import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

// import ModalWindow from './components/Modal/ModalWindow';
// import { goodElemType } from './type/Objects';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;

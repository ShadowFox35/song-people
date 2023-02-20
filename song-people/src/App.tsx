import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Body score={score} setScore={setScore} />
      </div>
      <Footer />
    </>
  );
}

export default App;

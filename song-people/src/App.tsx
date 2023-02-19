import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

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

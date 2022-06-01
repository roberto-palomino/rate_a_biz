import './App.css';
import { useState } from 'react';
// import _raw from './assets/texts/data.txt';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';
import Header from './components/Header/Header';
import { RemoveFromQueue } from '@material-ui/icons';
import QuiltedImageList from './components/Slider/SliderHome';

function App() {
  // const [raw, setRaw] = useState('');

  // fetch(_raw)
  //   .then((r) => r.text())
  //   .then((text) => {
  //     setRaw(text);
  //   });
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
    <div className='App'>
      <div className='textandslider'>
        {/* <h1 className='home_text'>{raw}</h1> */}
        {/* <h1 className='home_text'>Hola que tal</h1> */}
      </div>
      <div className='slider-home'>
        <QuiltedImageList className='carouselhome' />
      </div>
      {/* <Header /> */}
      <div className='top10'>
        {' '}
        <h2>TOP 10 Empresas mejor valoradas de España</h2>
      </div>
      <div className='top-reviews'>
        <TopBusiness className='top-preview' />
      </div>
    </div>
  );
}

export default App;

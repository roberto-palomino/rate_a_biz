import './App.css';
import { useState } from 'react';
import _raw from './assets/texts/data.txt';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';
import Header from './components/Header/Header';
import { RemoveFromQueue } from '@material-ui/icons';

function App() {
  const [raw, setRaw] = useState('');

  fetch(_raw)
    .then((r) => r.text())
    .then((text) => {
      setRaw(text);
    });
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
    <div className='App'>
      {/* <Header /> */}
      <div className='top10'>
        {' '}
        <h1>TOP 10 Empresas mejor valoradas de España</h1>
      </div>
      <div className='top-reviews'>
        <TopBusiness className='top-preview' />
      </div>
      <h2>{raw}</h2>
    </div>
  );
}

export default App;

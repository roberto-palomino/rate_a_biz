import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';
import Header from './components/Header/Header';

function App() {
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
    </div>
  );
}

export default App;

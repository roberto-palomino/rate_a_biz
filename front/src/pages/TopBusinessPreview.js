import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';

function App() {
  return (
    <div className='App'>
      <div className='top-reviews'>
        <TopBusiness className='top-preview' />
      </div>
    </div>
  );
}

export default App;

import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';
import Header from './components/Header/Header';
import QuiltedImageList from './components/Landing/QuiltedImageList';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <QuiltedImageList />
    </div>
  );
}

export default App;

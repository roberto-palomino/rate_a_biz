import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './components/TopBusiness';
import Header from './components/Header/Header';

function App() {
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
    <div className='App'>
      {/* <Header /> */}
      <h1 className='top10'>TOP 10 Empresas mejor valoradas de España</h1>
      <div className='top-reviews'>
        <TopBusiness className='top-preview' />
      </div>
    </div>
  );
}

export default App;

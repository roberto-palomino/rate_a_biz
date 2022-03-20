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
<<<<<<< HEAD
      <nav>
        <NavLink
          to='/signup'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Registrarse
        </NavLink>{' '}
        |
        {!token ? (
          <NavLink
            to='/login'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='underline'
          >
            Iniciar Sesión
          </NavLink>
        ) : null}{' '}
        |
        <NavLink
          to='/search'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Buscar
        </NavLink>
        |
        <NavLink
          to='/review'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Añadir valoración
        </NavLink>
        |
        <NavLink
          to='/profile'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Perfil de Usuario
        </NavLink>{' '}
        {/* QUITAR EL BORRADO DE LOCAL STORAGE */}
        <button
          onClick={(e) => {
            window.localStorage.clear();
            window.location.reload();
          }}
        >
          Cerrar sesión
        </button>
      </nav>
=======
      <Header />
      <div className='top-reviews'>
        <TopBusiness className='top-preview' />
      </div>
>>>>>>> 28e62a1f3282db7ca3bb47cc36a691dcd64657e1
    </div>
  );
}

export default App;

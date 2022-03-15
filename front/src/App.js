import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';
import { TopBusiness } from './pages/TopBusiness';

function App() {
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
    <div className='App'>
      <header>
        <a href='https://imgbb.com/' className='logo'>
          <img
            src='https://i.ibb.co/KmZ0GVL/Logo-Grande.png'
            alt='Logo-Grande'
            border='0'
          />
        </a>
        <nav className='nav'>
          <NavLink
            to='/signup'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
          >
            Registrarse
          </NavLink>{' '}
          {!token ? (
            <NavLink
              to='/login'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className='link'
            >
              Iniciar Sesión
            </NavLink>
          ) : null}{' '}
          <NavLink
            to='/search'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
          >
            Buscar
          </NavLink>{' '}
          |
          <NavLink
            to='/profile'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
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
      </header>
      <div className='top-reviews'>
        <TopBusiness className='top-preview' />
      </div>
    </div>
  );
}

export default App;

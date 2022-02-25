import './App.css';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from '.';

function App() {
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
    <div className='App'>
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
          to='/profile'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='underline'
        >
          Perfil de Usuario
        </NavLink>{' '}
      </nav>
    </div>
  );
}

export default App;

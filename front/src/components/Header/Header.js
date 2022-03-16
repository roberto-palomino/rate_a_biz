import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenContext } from '../..';
import { LoginModal } from '../LoginModal/LoginModal';
import './Header.css';
const Header = () => {
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
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
        {!token ? <LoginModal className='login' /> : null}{' '}
        <NavLink
          to='/search'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='link'
        >
          Buscar
        </NavLink>{' '}
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
  );
};

export default Header;

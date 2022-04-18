import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenContext } from '../..';
import { LoginModal } from '../LoginModal/LoginModal';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import './Header.css';
const Header = () => {
  const [token] = useContext(TokenContext);
  let activeStyle = {
    color: 'green',
  };
  return (
    <header>
      <a href='/' className='logo'>
        <img
          src='https://i.ibb.co/KmZ0GVL/Logo-Grande.png'
          alt='Logo-Grande'
          border='0'
        />
      </a>
      <nav className='nav'>
        <NavLink
          to='/search'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className='link'
        >
          Buscar
        </NavLink>{' '}
        {!token ? <LoginModal className='login' /> : null}{' '}
        {!token ? <SignUpModal className='signup' /> : null}{' '}
        {token ? (
          <NavLink
            to='/profile'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
          >
            Perfil de Usuario
          </NavLink>
        ) : null}{' '}
        {/* QUITAR EL BORRADO DE LOCAL STORAGE */}
        {token ? (
          <button
            onClick={(e) => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            Cerrar sesión
          </button>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;

import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenContext } from '../..';
import Avatar from '../Avatar';
import { LoginModal } from '../LoginModal/LoginModal';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import './Header.css';
const Header = () => {
  const [token] = useContext(TokenContext);

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
        {' '}
        <NavLink to='/search' className='link'>
          Buscar
        </NavLink>
      </nav>
      <nav className='nav'>
        {' '}
        {!token ? <LoginModal className='login' /> : null}{' '}
        {!token ? <SignUpModal className='signup' /> : null}{' '}
        {token ? (
          <div className='profile'>
            <a href='/profile'>
              <div>
                <Avatar className='avatar' />
              </div>
            </a>
            <button
              onClick={(e) => {
                window.localStorage.clear();
                window.location.reload();
              }}
            >
              Cerrar <br></br>sesión
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;

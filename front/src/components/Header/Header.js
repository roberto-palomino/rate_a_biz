import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenContext } from '../..';
import Avatar from '../Avatar';
import { LoginModal } from '../LoginModal/LoginModal';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import useUserData from '../../hooks/useUserData';
import Button from '@material-ui/core/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import star from '../../assets/images/estrella.png';
import './Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [token] = useContext(TokenContext);
  const { user } = useUserData(token);
  const avatarUrl = user?.avatar
    ? `http://localhost:4000/static/uploads/${user?.avatar}`
    : '';

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //  Función para cerrar sesión y regresar a la página de inicio
  function logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <header className='header'>
      <a href='/' id='home' className='logo'>
        <img
          id='logo'
          src='https://i.ibb.co/3hLZGDP/Logo-Ratebiz-Blanco.png'
          alt='Logo-Ratebiz-Blanco'
          border='0'
        />
        <span id='name-header'>
          rate a biz
          <img id='star' src={star} alt='estrella' />
        </span>
      </a>
      <nav className='nav'>
        {' '}
        <NavLink to='/search' className='link'>
          Buscar
        </NavLink>
      </nav>
      <nav className='nav-links'>
        {!token ? <LoginModal className='login' /> : null}{' '}
        {!token ? <SignUpModal className='signup' /> : null}{' '}
        {token ? (
          <div className='profile'>
            <Button
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <Avatar
                className='avatar'
                avatarUrl={avatarUrl}
                username={user?.username}
                hideFigCaption
              />
            </Button>
            <Menu
              className='header-menu'
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose}>
                {' '}
                <a href='/profile'>
                  <AccountCircleIcon fontSize='medium' />
                  Mi perfil
                </a>
              </MenuItem>
              <MenuItem
                className='close-session'
                onClick={() => {
                  handleClose();
                  logout();
                }}
              >
                <LogoutIcon fontSize='medium' />
                Cerrar sesión
              </MenuItem>
            </Menu>

            <div className='profile-links'>
              <button
                onClick={(e) => {
                  logout();
                }}
              >
                <LogoutIcon fontSize='medium' />
                Salir
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;

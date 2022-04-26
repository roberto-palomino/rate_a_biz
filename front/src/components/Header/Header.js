import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TokenContext } from '../..';
import Avatar from '../Avatar';
import { LoginModal } from '../LoginModal/LoginModal';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import useUserData from '../../hooks/useUserData';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [token] = useContext(TokenContext);
  const { user } = useUserData(token);
  const avatarUrl = user?.avatar
    ? `http://localhost:4000/static/uploads/${user?.avatar}`
    : '';

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeSession = e => {
    window.localStorage.clear();
    window.location.reload();
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
            {/* <Button
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
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
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
                <a href='/profile'>Mi perfil</a>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  closeSession();
                }}
              >
                Cerrar sesión
              </MenuItem>
            </Menu> */}

            <div>
              <Avatar
                className='avatar'
                avatarUrl={avatarUrl}
                username={user?.username}
                hideFigCaption
              />
            </div>
            <a href='/profile'>Mi perfil</a>
            <button
              onClick={e => {
                window.localStorage.clear();
                window.location.reload();
              }}
            >
              Cerrar sesión
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;

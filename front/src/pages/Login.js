import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../index';
import { LoginModal } from '../components/LoginModal/LoginModal';

export const Login = () => {
  const [token, setToken] = useContext(TokenContext);
  const [mail, setMail] = useState('');
  const mailChange = (e) => {
    setMail(e.target.value);
  };
  const [pass, setPass] = useState('');
  const passChange = (e) => {
    setPass(e.target.value);
  };
  const [visibility, setVisibility] = useState('');
  const visibilityChange = (e) => {
    if (!visibility) {
      setVisibility('text');
    } else {
      setVisibility('');
    }
  };
  const register = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      const data = {
        email: mail,
        password: pass,
      };
      const serializedData = JSON.stringify(data);
      const res = await fetch(' http://localhost:4000/login ', {
        method: 'POST',
        body: serializedData,
        headers: {
          'Content-type': 'application/json',
        },
      });
      const bodyRes = await res.json();
      if (res.ok) {
        setToken(bodyRes.data.token);
      }
    } catch (e) {
      console.error('Ha ocurrido un error', e);
    }
  };
  if (token) return <Navigate to='/' />;

  return (
    <div>
      <form id='form'>
        <FormControl id='email' variant='standard'>
          <InputLabel htmlFor='email-input'>Email</InputLabel>
          <Input
            id='email-input'
            type='email'
            value={mail}
            onChange={mailChange}
            endAdornment={
              <InputAdornment position='end'>
                <AccountCircle />
              </InputAdornment>
            }
            label='Email'
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
          <InputLabel htmlFor='password'>Contraseña</InputLabel>
          <Input
            id='password'
            type={visibility ? 'text' : 'password'}
            value={pass}
            onChange={passChange}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={visibilityChange}
                  edge='end'
                >
                  {visibility ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>

        <Stack className='filter' width={150} spacing={2}>
          <Button
            id='register'
            variant='outlined'
            color='primary'
            startIcon={<SendIcon />}
            onClick={register}
          >
            Iniciar sesión
          </Button>
        </Stack>
      </form>
    </div>
  );
};

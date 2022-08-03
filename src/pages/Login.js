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
import { Navigate, useParams, useLocation } from 'react-router-dom';
import { TokenContext } from '../index';
import toast, { Toaster } from 'react-hot-toast';

export const Login = (props) => {
  /* Obtenemos el ID de la empresa de los params */
  let location = useLocation();
  const { id } = useParams();
  const { profileId } = props;
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
      } else {
        toast.error('Usuario o contraseña incorrecta');
      }
    } catch (e) {
      console.error('error', e);
    }
  };
  /* if (token && id) return <Navigate to={`/businessProfile/${id}`} />; */
  if (token) return <Navigate to={location} replace={true} />;

  return (
    <div>
      <Toaster />
      <form id='form-login'>
        <FormControl sx={{ m: 1, minWidth: 252 }} id='email' variant='standard'>
          <InputLabel htmlFor='email-login-input'>Email</InputLabel>
          <Input
            id='email-login-input'
            type='email'
            value={mail}
            onChange={mailChange}
            autoComplete='off'
            endAdornment={
              <InputAdornment position='end'>
                <AccountCircle />
              </InputAdornment>
            }
            label='Email'
          />
        </FormControl>
        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'> */}
        <FormControl sx={{ m: 1, minWidth: 252 }} variant='standard'>
          <InputLabel htmlFor='password-login'>Contraseña</InputLabel>
          <Input
            id='password-login'
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

        <Stack className='filter' width={250} spacing={2}>
          <Button
            id='register-login'
            variant='outlined'
            color='primary'
            endIcon={<SendIcon />}
            onClick={register}
          >
            Iniciar Sesión
          </Button>
        </Stack>
      </form>
    </div>
  );
};

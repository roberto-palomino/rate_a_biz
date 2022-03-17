import './signup.css';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useLoadBusiness } from '../hooks/useLoadBusiness';

export const SignUp = () => {
  const [mail, setMail] = useState('');
  const mailChange = (e) => {
    setMail(e.target.value);
  };
  const [pass, setPass] = useState('');
  const passChange = (e) => {
    setPass(e.target.value);
  };
  const [role, setRole] = useState('worker');
  const roleChange = (e) => {
    setRole(e.target.value);
  };
  const [visibility, setVisibility] = useState('');
  const visibilityChange = (e) => {
    if (!visibility) {
      setVisibility('text');
    } else {
      setVisibility('');
    }
  };
  const [visibility2, setVisibility2] = useState('');
  const visibility2Change = (e) => {
    if (!visibility2) {
      setVisibility2('text');
    } else {
      setVisibility2('');
    }
  };
  const [pass2, setPass2] = useState('');
  const pass2Change = (e) => {
    setPass2(e.target.value);
  };
  /* Función para compara las dos contraseñas */
  let passSame = false;
  const comparePass = () => {
    if (pass2 === pass) {
      passSame = true;
    }
  };
  /* Variable para controlar el que el campo email sea válido */
  var validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      mail
    );
  /* Creamos un estado registrado. Cuando el usuario se registra se muestra un mensaje */
  const [registered, setRegistered] = useState('');

  const register = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      const data = {
        email: mail,
        password: pass,
        role: role,
      };
      const serializedData = JSON.stringify(data);
      const res = await fetch(' http://localhost:4000/signup ', {
        method: 'POST',
        body: serializedData,
        headers: {
          'Content-type': 'application/json',
        },
      });
      const bodyRes = await res.json();
      setRegistered('Ok');
    } catch (e) {
      console.error('Ha ocurrido un error', e);
    }
  };
  comparePass();
  return (
    <div>
      {registered ? (
        <p>
          Usuario registrado correctamente. <br /> Le hemos enviado un email de
          confirmación
        </p>
      ) : (
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
            {mail && !validEmail ? (
              <FormHelperText id='helper-mail-invalid'>
                Formato de email inválido
              </FormHelperText>
            ) : null}
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
          <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
            <InputLabel htmlFor='password-repeat'>
              Repetir contraseña
            </InputLabel>

            <Input
              id='password-repeat'
              type={visibility2 ? 'text' : 'password'}
              value={pass2}
              onChange={pass2Change}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={visibility2Change}
                    edge='end'
                  >
                    {visibility2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password2'
            />
            {passSame ? (
              <FormHelperText id='helper-pass-valid'></FormHelperText>
            ) : (
              <FormHelperText id='helper-pass-invalid'>
                Las contraseñas no coinciden
              </FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel id='user-type'>Tipo de usuario</FormLabel>
            <RadioGroup
              row
              aria-labelledby='user-type'
              name='user-type'
              value={role}
              onChange={roleChange}
            >
              <FormControlLabel
                value='worker'
                control={<Radio />}
                label='Trabajador'
              />
              <FormControlLabel
                value='business'
                control={<Radio />}
                label='Empresa'
              />
            </RadioGroup>
          </FormControl>

          <Stack className='filter' width={200} spacing={2}>
            <Button
              id='register'
              variant='outlined'
              color='secondary'
              startIcon={<SendIcon />}
              onClick={register}
            >
              Registrarse
            </Button>
          </Stack>
        </form>
      )}
    </div>
  );
};

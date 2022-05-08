import { useState, useContext } from 'react';
import { TokenContext } from '../../../index';
import toast, { Toaster } from 'react-hot-toast';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const EditUserPass = props => {
  const { userId } = props;
  const [token] = useContext(TokenContext);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');
  const disabledClassname = !isEditing ? 'disabled' : '';
  const [visibility, setVisibility] = useState('');
  const [visibility2, setVisibility2] = useState('');

  const visibilityChange = e => {
    if (!visibility) {
      setVisibility('text');
    } else {
      setVisibility('');
    }
  };

  const visibility2Change = e => {
    if (!visibility2) {
      setVisibility2('text');
    } else {
      setVisibility2('');
    }
  };
  const updateUserPass = async e => {
    e.preventDefault();

    const userData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      const response = await fetch(
        `http://localhost:4000/users/${userId}/password`,
        {
          method: 'PUT',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        }
      );

      const body = await response.json();
      const message = body.message;
      if (body.status === 'ok') {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {}
  };

  function handleEditForm(e) {
    e.preventDefault();
    setIsEditing(!isEditing);

    if (isEditing) {
      updateUserPass(e);
      setButtonMessage('Editar datos');
    } else {
      setButtonMessage('Guardar cambios');
    }
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form
        className={`user-data-form-pass ${disabledClassname}`}
        onSubmit={updateUserPass}
      >
        <FormControl sx={{ minWidth: 202 }} variant='standard'>
          <InputLabel htmlFor='password'>Antigua contraseña</InputLabel>
          <Input
            className='form-pass-input'
            id='password'
            disabled={!isEditing}
            type={visibility ? 'text' : 'password'}
            value={oldPassword}
            onChange={e => {
              setOldPassword(e.target.value);
            }}
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

        <FormControl sx={{ minWidth: 202 }} variant='standard'>
          <InputLabel htmlFor='new-password'>Nueva contraseña</InputLabel>
          <Input
            id='new-password'
            disabled={!isEditing}
            type={visibility2 ? 'text' : 'password'}
            value={newPassword}
            onChange={e => {
              setNewPassword(e.target.value);
            }}
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
            label='new-password'
          />
        </FormControl>
      </form>
      <div className='tabs-content-button'>
        <button
          className='form-button'
          type='submit'
          value='Guardar cambios'
          onClick={handleEditForm}
        >
          {buttonMessage}
        </button>
      </div>
    </>
  );
};

export default EditUserPass;

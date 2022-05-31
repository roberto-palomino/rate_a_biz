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
  const [oldPasswordVisibility, setOldPasswordVisibility] = useState('');
  const [newPasswordVisibility, setNewPasswordVisibility] = useState('');

  //  Usamos la clase "disabled" mientras no se esté editando el formulario.
  const disabledClassname = !isEditing ? 'disabled' : '';

  //  Constante que permite ver el contendido del input u ocultarlo.
  const changeVisibility = (e, type) => {
    e.preventDefault();
    const visibility =
      type === 'old' ? oldPasswordVisibility : newPasswordVisibility;
    const setVisibility =
      type === 'old' ? setOldPasswordVisibility : setNewPasswordVisibility;

    if (!visibility) {
      setVisibility('text');
    } else {
      setVisibility('');
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
    } catch (error) {
      toast.error(
        `Error al intentar editar la contraseña del usuario ${userId}: ${error}`
      );
    }
  };

  // Alternamos la edición del formulario, habilitándolo o deshabilitándolo.
  // Se modifica el texto que muestra el botón dependiendo del estado en el que se encuentre
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
            type={oldPasswordVisibility ? 'text' : 'password'}
            value={oldPassword}
            onChange={e => {
              setOldPassword(e.target.value);
            }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle old Password Visibility'
                  onClick={e => {
                    changeVisibility(e, 'old');
                  }}
                  edge='end'
                >
                  {oldPasswordVisibility ? <VisibilityOff /> : <Visibility />}
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
            type={newPasswordVisibility ? 'text' : 'password'}
            value={newPassword}
            onChange={e => {
              setNewPassword(e.target.value);
            }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle new Password Visibility'
                  onClick={e => {
                    changeVisibility(e);
                  }}
                  edge='end'
                >
                  {newPasswordVisibility ? <VisibilityOff /> : <Visibility />}
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

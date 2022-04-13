import { useState, useContext } from 'react';
import { TokenContext } from '../../../index';

import { FormControl, FormHelperText, Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

const EditUserPass = props => {
  const { userId } = props;
  const [token] = useContext(TokenContext);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');

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
      // TODO: Enviar mensajes al usurio
      const body = await response.json();
      console.log('body', body);
    } catch (error) {
      console.error('Error en la llamada al API');
    }
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
    <div>
      <form className='user-data-form-pass' onSubmit={updateUserPass}>
        <FormControl>
          <InputLabel htmlFor='oldPassword'></InputLabel>
          <FormHelperText>Antigua contraseña</FormHelperText>
          <Input
            id='oldPassword'
            disabled={!isEditing}
            name='password'
            type='text'
            value={oldPassword}
            placeholder='***********'
            onChange={e => {
              setOldPassword(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='password' />
          <FormHelperText>Nueva contraseña</FormHelperText>
          <Input
            id='password'
            disabled={!isEditing}
            name='password'
            type='text'
            value={newPassword}
            onChange={e => {
              setNewPassword(e.target.value);
            }}
          />
        </FormControl>

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
      </form>
    </div>
  );
};

export default EditUserPass;

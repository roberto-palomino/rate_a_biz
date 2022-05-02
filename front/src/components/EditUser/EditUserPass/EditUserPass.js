import { useState, useContext } from 'react';
import { TokenContext } from '../../../index';
import toast, { Toaster } from 'react-hot-toast';
import { TextField } from '@mui/material';

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
      toast.success('¡Datos actualizados!');
      // console.log('body', body);
    } catch (error) {
      // console.error('Error en la llamada al API');
      toast.error('¡Se ha producido un error!');
    }
  };

  function handleEditForm(e) {
    e.preventDefault();
    setIsEditing(!isEditing);

    if (isEditing) {
      updateUserPass(e);
      setButtonMessage('Editar datos');
      // toast.success('¡Datos actualizados!');
    } else {
      setButtonMessage('Guardar cambios');
    }
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <form className='user-data-form-pass' onSubmit={updateUserPass}>
        <TextField
          label='Antigua contraseña'
          variant='standard'
          multiline
          disabled={!isEditing}
          value={oldPassword}
          placeholder='***********'
          onChange={e => {
            setOldPassword(e.target.value);
          }}
        />

        <TextField
          label='Nueva contraseña'
          variant='standard'
          disabled={!isEditing}
          value={newPassword}
          onChange={e => {
            setNewPassword(e.target.value);
          }}
        />
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
    </div>
  );
};

export default EditUserPass;

import { useState, useContext } from 'react';
import { TokenContext } from '../../../index';
import EditAvatar from '../EditAvatar';
import './EditUserPass.css';

const EditUserPass = props => {
  const { user, userId } = props;
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
    <div className='information-form'>
      {user && <EditAvatar user={user} userId={userId} />}
      <form className='user-data-form-pass' onSubmit={updateUserPass}>
        <div className='username-password'>
          <label htmlFor='oldPassword'>Antigua contraseña</label>
          <input
            disabled={!isEditing}
            id='oldPassword'
            name='password'
            type='text'
            value={oldPassword}
            placeholder='Escriba su antigua contraseña...'
            onChange={e => {
              setOldPassword(e.target.value);
            }}
          />
        </div>
        <div className='username-password'>
          <label htmlFor='password'>Nueva contraseña</label>
          <input
            disabled={!isEditing}
            id='password'
            name='password'
            type='text'
            value={newPassword}
            placeholder='Escriba su nueva contraseña...'
            onChange={e => {
              setNewPassword(e.target.value);
            }}
          />
        </div>

        <button
          className='form-button'
          type='submit'
          value='Guardar cambios'
          onClick={handleEditForm}
        >
          {buttonMessage}
        </button>
      </form>
    </div>
  );
};

export default EditUserPass;

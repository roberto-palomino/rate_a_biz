import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';
import { TextField } from '@mui/material';

const EditUserForm = props => {
  const { user, userId, onUpdated } = props;
  const [token] = useContext(TokenContext);

  const [newEmail, setNewEmail] = useState('');
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');

  useEffect(() => {
    if (user) {
      !newEmail && !isEditing && setNewEmail(user.email || '');
      !username && !isEditing && setUserName(user.username || '');
      !name && !isEditing && setName(user.name || '');
      !lastname && !isEditing && setLastName(user.lastname || '');
    }
  }, [isEditing, newEmail, username, name, lastname, user]);

  useEffect(() => {
    onUpdated && !isEditing && onUpdated(false);
  }, [onUpdated, isEditing]);

  const updateUser = async e => {
    const userData = {
      username: username,
      newEmail: newEmail,
      name: name,
      lastname: lastname,
    };

    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      // TODO: Enviar mensajes a los usuarios
      const body = await response.json();
      if (body.status === 'ok') {
        onUpdated(true);
        const message = body.message;
        // TODO: Implementar mensajes mostrado al usuario
        console.log('Success:', message);
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  function handleEditForm(e) {
    e.preventDefault();
    setIsEditing(!isEditing);

    if (isEditing) {
      updateUser(e);
      setButtonMessage('Editar datos');
    } else {
      setButtonMessage('Guardar cambios');
    }
  }

  return (
    <div>
      <form className='user-data-form'>
        <TextField
          label='Usuario'
          variant='standard'
          disabled={!isEditing}
          value={username}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <TextField
          label='Email'
          variant='standard'
          disabled={!isEditing}
          value={newEmail}
          onChange={e => {
            setNewEmail(e.target.value);
          }}
        />
        <TextField
          label='Nombre'
          variant='standard'
          disabled={!isEditing}
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <TextField
          label='Apellidos'
          variant='standard'
          disabled={!isEditing}
          value={lastname}
          onChange={e => {
            setLastName(e.target.value);
          }}
        />
      </form>
      <div className='tabs-content-button'>
        <button className='form-button' type='submit' onClick={handleEditForm}>
          {buttonMessage}
        </button>
      </div>
    </div>
  );
};

export default EditUserForm;

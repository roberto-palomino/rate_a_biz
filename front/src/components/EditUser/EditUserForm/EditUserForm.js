import { FormControl, Input, InputLabel } from '@material-ui/core';
import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';

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
        <FormControl>
          <InputLabel htmlFor='username'>Usuario</InputLabel>
          <Input
            id='username'
            disabled={!isEditing}
            name='username'
            type='text'
            value={username}
            placeholder='Escriba su nombre de usuario...'
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            disabled={!isEditing}
            name='email'
            type='text'
            value={newEmail}
            placeholder='Escriba su nombre de usuario...'
            onChange={e => {
              setNewEmail(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='name'>Nombre</InputLabel>
          <Input
            id='name'
            disabled={!isEditing}
            name='name'
            type='text'
            value={name}
            placeholder='Escriba su nombre de usuario...'
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor='lastname'>Apellidos</InputLabel>
          <Input
            id='lastname'
            disabled={!isEditing}
            name='lastname'
            type='text'
            value={lastname}
            placeholder='Escriba su nombre de usuario...'
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </FormControl>
        <div className='tabs-content-button'>
          <button
            className='form-button'
            type='submit'
            onClick={handleEditForm}
          >
            {buttonMessage}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;

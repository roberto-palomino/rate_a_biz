import { useState, useEffect } from 'react';
import EditAvatar from '../EditAvatar';

const EditUserForm = () => {
  const [user, setUser] = useState(null);
  const userId = '13';
  const [newEmail, setNewEmail] = useState('');
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');

  async function getUserData() {
    const urlUserData = 'http://localhost:4000/users/13';
    try {
      const response = await fetch(urlUserData);
      const responseData = await response.json();
      const userData = responseData.data.user;

      setUser(userData);
      setNewEmail(userData.email);
      setUserName(userData.username || '');
      setName(userData.name || '');
      setLastName(userData.lastname || '');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const updateUser = async e => {
    const userData = {
      username: username,
      newEmail: newEmail,
      name: name,
      lastname: lastname,
    };

    try {
      const response = await fetch('http://localhost:4000/users/13', {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // TODO: Enviar mensajes a los usuarios
      const body = await response.json();
      if (body.status === 'ok') {
        const message = body.message;
        // TODO: Implementar mensajes mostrado al usuario
        console.log('Success:', message);
      }
    } catch (error) {
      console.error('Error en la llamada al API:', error);
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
    <div className='information-form'>
      {user && <EditAvatar user={user} userId={userId} />}
      <form className='user-data-form'>
        <div className='username'>
          <label htmlFor='username'>Usuario</label>
          <input
            disabled={!isEditing}
            id='username'
            name='username'
            type='text'
            value={username}
            placeholder='Escriba su nombre de usuario...'
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className='email'>
          <label htmlFor='email'>Email</label>
          <input
            disabled={!isEditing}
            id='email'
            name='email'
            type='email'
            placeholder='Escriba aquí su email...'
            value={newEmail}
            onChange={e => {
              setNewEmail(e.target.value);
            }}
          />
        </div>

        <div className='name'>
          <label htmlFor='name'>Nombre</label>
          <input
            disabled={!isEditing}
            id='name'
            name='name'
            type='text'
            placeholder='Escriba aquí su nombre...'
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='lastname'>
          <label htmlFor='lastname'>Apellidos</label>
          <input
            disabled={!isEditing}
            id='lastname'
            name='Apellidos'
            type='text'
            placeholder='Escriba aquí sus apellidos...'
            value={lastname}
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </div>

        <button className='form-button' type='submit' onClick={handleEditForm}>
          {buttonMessage}
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;

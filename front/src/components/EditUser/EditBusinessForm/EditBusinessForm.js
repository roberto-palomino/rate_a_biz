import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';
import EditAvatar from '../EditAvatar';

import './EditBusinessForm.css';

const EditBusinessForm = props => {
  const { user, userId, onUpdated } = props;
  const [token] = useContext(TokenContext);

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  // const [name, setName] = useState('');
  // const [url_Web, setUrl_Web] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');

  useEffect(() => {
    if (user) {
      !email && !isEditing && setEmail(user.email || '');
      !username && !isEditing && setUserName(user.username || '');
      // !name && !isEditing && setName(user.name || '');
      // !url_Web && !isEditing && setUrl_Web(user.name || '');
    }
  }, [isEditing, email, username, user]);

  useEffect(() => {
    onUpdated && !isEditing && onUpdated(false);
  }, [onUpdated, isEditing]);

  const updateBusiness = async e => {
    const businessData = {
      username: username,
      newEmail: email,
      // name: name,
      // url_web: url_Web,
    };

    try {
      const response = await fetch(`http://localhost:4000/business/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(businessData),
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
      updateBusiness(e);
      setButtonMessage('Editar datos');
    } else {
      setButtonMessage('Guardar cambios');
    }
  }

  return (
    <div className='information-form'>
      {user && <EditAvatar user={user} userId={userId} onUpdated={onUpdated} />}
      <form className='business-data-form'>
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
            value={email}
            onChange={e => {
              setEmail(e.target.value);
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

export default EditBusinessForm;

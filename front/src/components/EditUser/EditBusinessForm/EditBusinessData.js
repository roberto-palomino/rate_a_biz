import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';
import UserSelectState from './UserSelectState';
import EditAvatar from '../EditAvatar';
import './EditBusinessForm.css';

const EditBusinessData = props => {
  const { user, userId, onUpdated, business } = props;
  const [token] = useContext(TokenContext);
  // console.log('Datos de empresa:', business);

  const [name, setName] = useState('');
  const [url_Web, setUrl_Web] = useState('');
  const [selectState, setSelectState] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');

  useEffect(() => {
    if (business) {
      !name && !isEditing && setName(business.name || '');
      !url_Web && !isEditing && setUrl_Web(business.url_web || '');
      !selectState && !isEditing && setSelectState(business.headquarter || '');
    }
  }, [isEditing, name, selectState, url_Web, business]);

  useEffect(() => {
    onUpdated && !isEditing && onUpdated(false);
  }, [onUpdated, isEditing]);

  const updateBusiness = async e => {
    const businessData = {
      name: name,
      url_web: url_Web,
      headquarter: selectState,
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
        <div className='name'>
          <label htmlFor='name'>Nombre</label>
          <input
            disabled={!isEditing}
            id='name'
            name='name'
            type='text'
            value={name}
            placeholder='Escriba su nombre de empresa...'
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='url_Web'>
          <label htmlFor='url_Web'>Sitio web</label>
          <input
            disabled={!isEditing}
            id='url_Web'
            name='url_Web'
            type='texto'
            placeholder='Escriba aquí su página web...'
            value={url_Web}
            onChange={e => {
              setUrl_Web(e.target.value);
            }}
          />
        </div>
        <div>
          <UserSelectState
            selectState={selectState}
            setStateValue={setSelectState}
          />
        </div>

        <button className='form-button' type='submit' onClick={handleEditForm}>
          {buttonMessage}
        </button>
      </form>
    </div>
  );
};

export default EditBusinessData;

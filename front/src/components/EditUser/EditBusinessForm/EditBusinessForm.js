import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';
import BusinessSelect from './BusinessSelect';
import EditAvatar from '../EditAvatar';
import { useLoadSectors } from '../../../hooks/useLoadSectors';
import { useLoadStates } from '../../../hooks/useLoadStates';
import './EditBusinessForm.css';

const EditBusinessForm = props => {
  const { user, userId, onUpdated, business } = props;
  const [token] = useContext(TokenContext);
  const [states] = useLoadStates();
  const [sectors] = useLoadSectors();
  const businessData = business.businessInfo;
  const userData = business.userInfo;

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [url_Web, setUrl_Web] = useState('');
  const [selectState, setSelectState] = useState('');
  const [selectSector, setSelectSector] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [buttonMessage, setButtonMessage] = useState('Editar datos');

  useEffect(() => {
    if (businessData && userData) {
      !email && !isEditing && setEmail(userData.email || '');
      !username && !isEditing && setUserName(userData.username || '');
      !name && !isEditing && setName(businessData.name || '');
      !url_Web && !isEditing && setUrl_Web(businessData.url_web || '');
      !selectState &&
        !isEditing &&
        setSelectState(businessData.headquarter || '');
      !selectSector && !isEditing && setSelectSector(businessData.sector || '');
    }
  }, [
    isEditing,
    name,
    selectState,
    url_Web,
    email,
    username,
    businessData,
    userData,
    selectSector,
  ]);

  useEffect(() => {
    onUpdated && !isEditing && onUpdated(false);
  }, [onUpdated, isEditing]);

  const updateBusiness = async e => {
    const businessData = {
      username: username,
      newEmail: email,
      name: name,
      url_web: url_Web,
      headquarter: selectState,
      sector: selectSector,
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
        <div className='align-label'>
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
        <div className='align-label'>
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
        <div className='align-label'>
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
        <div className='align-label'>
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
        <BusinessSelect
          disabled={!isEditing}
          selectItem={selectState}
          setSelectItem={setSelectState}
          inputId={'state'}
          label={'Sede'}
          options={states.map(state => (
            <option key={state.id} value={state.nameState}>
              {state.nameState}
            </option>
          ))}
        />
        <BusinessSelect
          disabled={!isEditing}
          selectItem={selectSector}
          setSelectItem={setSelectSector}
          inputId={'sector'}
          label={'Sector'}
          options={sectors.map(sector => (
            <option key={sector.id} value={sector.name}>
              {sector.name}
            </option>
          ))}
        />

        <button className='form-button' type='submit' onClick={handleEditForm}>
          {buttonMessage}
        </button>
      </form>
    </div>
  );
};

export default EditBusinessForm;

import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';
import BusinessSelect from './BusinessSelect';
import { useLoadSectors } from '../../../hooks/useLoadSectors';
import { useLoadStates } from '../../../hooks/useLoadStates';
import { FormControl, Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import './EditBusinessForm.css';

const EditBusinessForm = props => {
  const { userId, onUpdated, business } = props;

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
    <>
      <div>
        <form className='business-data-form'>
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
              value={email}
              placeholder='Escriba aquí su email...'
              onChange={e => {
                setEmail(e.target.value);
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
              placeholder='Escriba aquí su name...'
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor='url_Web'>Sitio web</InputLabel>
            <Input
              id='url_Web'
              disabled={!isEditing}
              name='url_Web'
              type='text'
              value={url_Web}
              placeholder='Escriba aquí su página web...'
              onChange={e => {
                setUrl_Web(e.target.value);
              }}
            />
          </FormControl>

          {states.length > 0 && (
            <FormControl>
              <BusinessSelect
                disabled={!isEditing}
                selectItem={selectState}
                setSelectItem={setSelectState}
                inputId={'state'}
                label={'Sede'}
                options={states.map(state => (
                  <MenuItem key={state.id} value={state.nameState}>
                    {state.nameState}
                  </MenuItem>
                ))}
              />
            </FormControl>
          )}

          {sectors.length > 0 && (
            <FormControl>
              <BusinessSelect
                disabled={!isEditing}
                selectItem={selectSector}
                setSelectItem={setSelectSector}
                inputId={'sector'}
                label={'Sector'}
                options={sectors.map(sector => (
                  <MenuItem key={sector.id} value={sector.name}>
                    {sector.name}
                  </MenuItem>
                ))}
              />
            </FormControl>
          )}
        </form>
        <div className='tabs-content-button'>
          <button
            className='form-button'
            type='submit'
            onClick={handleEditForm}
          >
            {buttonMessage}
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBusinessForm;

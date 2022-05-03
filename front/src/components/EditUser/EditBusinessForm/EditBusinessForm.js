import { useState, useEffect, useContext } from 'react';
import { TokenContext } from '../../../index';
import BusinessSelect from './BusinessSelect';
import { useLoadSectors } from '../../../hooks/useLoadSectors';
import { useLoadStates } from '../../../hooks/useLoadStates';
import toast, { Toaster } from 'react-hot-toast';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
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

      const body = await response.json();
      const message = body.message;
      if (body.status === 'ok') {
        onUpdated(true);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {}
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
        <Toaster />
      </div>
      <form className='business-data-form'>
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
          value={email}
          onChange={e => {
            setEmail(e.target.value);
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
          label='Sitio web'
          variant='standard'
          disabled={!isEditing}
          value={url_Web}
          onChange={e => {
            setUrl_Web(e.target.value);
          }}
        />

        {states.length > 0 && (
          <BusinessSelect
            disabled={!isEditing}
            selectItem={selectState}
            setSelectItem={setSelectState}
            inputId={'state'}
            label={'Sede'}
            options={states.map(state => (
              <MenuItem key={state.id} value={state.nameStates}>
                {state.nameStates}
              </MenuItem>
            ))}
          />
        )}

        {sectors.length > 0 && (
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
        )}
      </form>
      <div className='tabs-content-button'>
        <button className='form-button' type='submit' onClick={handleEditForm}>
          {buttonMessage}
        </button>
      </div>
    </>
  );
};

export default EditBusinessForm;

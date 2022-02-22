import { useState } from 'react';
import './EditUserPass.css';

const EditUserPass = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const updateUserPass = async e => {
    e.preventDefault();
    // setNewPassword('');

    const userData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      const response = await fetch('http://localhost:4000/users/13/password', {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // TODO: Enviar mensajes al usurio
      const body = await response.json();
      console.log('body', body);
    } catch (error) {
      console.error('Error en la llamada al API');
    }
  };
  return (
    <>
      <div className='information-form'>
        <form className='user-data-form-pass' onSubmit={updateUserPass}>
          <div className='username-password'>
            <label htmlFor='oldPassword'>Antigua contraseña</label>
            <input
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

          <button className='form-button' type='submit' value='Guardar cambios'>
            Editar datos
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUserPass;

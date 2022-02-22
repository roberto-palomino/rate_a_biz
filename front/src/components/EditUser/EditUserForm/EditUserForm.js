import { useState, useEffect } from 'react';

const EditUserForm = () => {
  const [newEmail, setNewEmail] = useState('');
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');

  async function getUserData() {
    const urlUserData = 'http://localhost:4000/users/13';
    try {
      const response = await fetch(urlUserData);
      const responseData = await response.json();
      const refrehUserData = responseData.data.user;
      setNewEmail(refrehUserData.email);
      setUserName(refrehUserData.username);
      setName(refrehUserData.name);
      setLastName(refrehUserData.lastname);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const updateUser = async e => {
    e.preventDefault();

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
      const message = body.message;
      console.log('success message', message);
    } catch (error) {
      console.error('Error en la llamada al API');
    }
  };
  return (
    <div className='information-form'>
      <form className='user-data-form' onSubmit={updateUser}>
        <div className='username'>
          <label htmlFor='username'>Usuario</label>
          <input
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

        <button className='form-button' type='submit' value='Editar datos'>
          Editar datos
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;

import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { TokenContext } from '../../../index';
import { useNavigate } from 'react-router-dom';

const DeleteUser = props => {
  const { userId } = props;
  const [token] = useContext(TokenContext);
  const navigate = useNavigate();

  const deleteUser = async e => {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const body = await response.json();
      const message = body.message;
      if (body.status === 'ok') {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {}
  };

  function handleDelete(e) {
    deleteUser(e);
    window.localStorage.clear();
    navigate('/');
    window.location.reload();
  }

  function handleEditForm(e) {
    e.preventDefault();
    toast(
      t => (
        <div>
          <p>Pulse el botón de confirmar para eliminar la cuenta</p>
          <div className='toast-button-container'>
            <button
              className='form-button form-button-delete'
              onClick={() => {
                handleDelete();
                toast.dismiss(t.id);
              }}
            >
              Confirmar
            </button>
            <button
              className='form-button'
              onClick={() => {
                toast.dismiss(t.id);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      { duration: 20000 }
    );
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className='tabs-content-button'>
        <button className='form-button' type='submit' onClick={handleEditForm}>
          Eliminar cuenta
        </button>
      </div>
    </>
  );
};

export default DeleteUser;

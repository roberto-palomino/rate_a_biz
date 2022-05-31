import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { TokenContext } from '../../../index';

const DeleteUser = props => {
  const { userId } = props;
  const [token] = useContext(TokenContext);

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
        logout();
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(
        `Error al intentar eliminar la cuenta del usuario ${userId}: ${error}`
      );
    }
  };

  //  Función para eliminar el token y regresar a la página de inicio
  function logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  // Función que muestra en pantalla un mensaje para confirmar la eliminación de la cuenta o cancelar la petición.
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
                deleteUser(e);
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
      <div>
        <button className='form-button' type='submit' onClick={handleEditForm}>
          Eliminar cuenta
        </button>
      </div>
    </>
  );
};

export default DeleteUser;

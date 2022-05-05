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
      } else {
        toast.error(message);
      }
    } catch (error) {}
  };

  function handleEditForm(e) {
    e.preventDefault();
    deleteUser(e);
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className='tabs-content-button'>
        <button
          className='form-button-delete'
          type='submit'
          onClick={handleEditForm}
        >
          {/* {buttonMessage} */}Eliminar cuenta
        </button>
      </div>
    </>
  );
};

export default DeleteUser;

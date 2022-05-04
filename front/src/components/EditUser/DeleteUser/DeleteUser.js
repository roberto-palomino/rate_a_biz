import React from 'react';
import decodeTokenData from '../../../helpers/decodeTokenData';

const DeleteUser = (token, hasUpdated) => {
  //   const [user, setUser] = useState({});
  //   const decodedToken = decodeTokenData(token);
  //   const userId = decodedToken?.id;
  //   const userRole = decodedToken?.role;

  return (
    <>
      <div className='tabs-content-button'>
        <button className='form-button-delete' type='submit'>
          {/* {buttonMessage} */}Eliminar cuenta
        </button>
      </div>
    </>
  );
};

export default DeleteUser;

import { Button } from '@mui/material';
import { Login } from '../../pages';
import './LoginModal.css';
import close from '../../assets/images/close.png';
export const LoginModal = () => {
  return (
    <>
      <a href='#miModal'>Iniciar sesión</a>

      <div id='miModal' className='modal'>
        <div className='modal-contenido'>
          <a href='/' className='close'>
            <img src={close} alt='cerrar' className='close-img' />
          </a>
          <Login />
          <div className='enlace'>
            ¿Aun no tienes cuenta?
            <a href='/signup' className='signup'>
              Registrate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

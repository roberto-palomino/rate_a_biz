import { Login } from '../../pages';
import './LoginModal.css';
import close from '../../assets/images/close.png';
export const LoginModal = () => {
  return (
    <>
      <a href='#LoginModal'>Iniciar sesión</a>

      <div id='LoginModal' className='modal'>
        <div className='modal-contenido'>
          <a href='/#' className='close'>
            <img src={close} alt='cerrar' className='close-img' />
          </a>
          <Login />
          <div className='enlace'>
            ¿Aun no tienes cuenta?
            <a href='/#SignUpModal' className='signup'>
              Registrate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

import { SignUp } from '../../pages';
import './SignUpModal.css';
import close from '../../assets/images/close.png';
export const SignUpModal = () => {
  return (
    <>
      <a href='#SignUpModal'>Registrarse</a>

      <div id='SignUpModal' className='modal'>
        <div className='modal-contenido'>
          <a href='/#' className='close'>
            <img src={close} alt='cerrar' className='close-img' />
          </a>
          <SignUp />
          <div className='enlace'>
            ¿Ya tienes tienes cuenta?
            <a href='/#LoginModal' className='signup'>
              Inicia sesión
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

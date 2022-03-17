import { SignUp } from '../../pages';
import '../LoginModal/LoginModal.css';
import close from '../../assets/images/close.png';
export const SignUpModal = () => {
  return (
    <>
      <a href='#miModal'>Registrarse</a>

      <div id='miModal' className='modal'>
        <div className='modal-contenido'>
          <a href='/#' className='close'>
            <img src={close} alt='cerrar' className='close-img' />
          </a>
          <SignUp />
          <div className='enlace'>
            ¿Ya tienes tienes cuenta?
            <a href='/#miModal' className='signup'>
              Inicia sesión
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

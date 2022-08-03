import { useParams } from 'react-router-dom';
import { useValidateUser } from '../../hooks/useValidateUser';
import { LoginModal } from '../LoginModal/LoginModal';
import './Validate.css';

export const Validate = () => {
  /* Obtenemos el id de los params */
  const { registrationCode } = useParams();

  /* Obtenemos al información del perfil a través de nuestro custom hook,
  al que le pasamos la variable ID de los params para saber que perfil cargar */
  const [user] = useValidateUser(registrationCode);

  return (
    <>
      <div className='info-validate'>
        <div className='validate'>
          <h5 id='validate-text'>
            <div>Usuario Validado</div>

            <LoginModal />
            <div>
              para disfrutar de todas las posibilidades, y no olvides editar tus
              datos en tu perfil de usuario.
            </div>
          </h5>
        </div>
      </div>
    </>
  );
};

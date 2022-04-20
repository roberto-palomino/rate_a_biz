import { Button, Rating, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';

export const Preview = (props) => {
  const {
    id,
    enviroment,
    conciliation,
    oportunities,
    salary,
    title,
    description,
    stateName,
    bussinesName,
    setBusinessProfileInfo,
    showProfileButton,
    businessProfileInfo,
  } = props;

  const loadBusinessProfile = async (e) => {
    try {
      const res = await fetch(`http://localhost:4000/business/${id}`, {
        method: 'GET',
      });
      const body = await res.json();

      setBusinessProfileInfo(body.data);
    } catch (e) {
      console.error('Err:', e);
    }
  };
  console.log('info en preview', businessProfileInfo);
  return (
    <>
      <div className='info'>
        <h3> {bussinesName} </h3>
        <h5> {stateName}</h5>
        <Avatar size='medium' />
        {showProfileButton ? (
          <Button
            id='register-login'
            variant='outlined'
            color='primary'
            onClick={loadBusinessProfile}
          >
            <NavLink to='/BusinessProfile' className='link profile-link'>
              Ver Perfil
            </NavLink>
          </Button>
        ) : null}

        <h1> {title} </h1>
      </div>
      <div className='valorations'>
        <div>
          <Typography component='legend'>Ambiente laboral</Typography>
          <Rating name='read-only' value={enviroment} readOnly />
        </div>
        <div>
          <Typography component='legend'>Conciliación</Typography>
          <Rating name='read-only' value={conciliation} readOnly />
        </div>
        <div>
          <Typography component='legend'>Oportunidades</Typography>
          <Rating name='read-only' value={oportunities} readOnly />
        </div>
        <div>
          <Typography component='legend'>Salario</Typography>
          <Rating name='read-only' value={salary} readOnly />
        </div>
      </div>

      <div className='comments'>
        <p className='comment'>{description}</p>
      </div>
    </>
  );
};

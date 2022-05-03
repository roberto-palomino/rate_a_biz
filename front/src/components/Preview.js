import { Button, Rating, Typography } from '@mui/material';
import Avatar from './Avatar';
import { useNavigate } from 'react-router';

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
    showProfileButton,
    avatar,
    startYear,
    endYear,
    url_web,
    salary_range,
    job,
  } = props;
  const avatarUrl = avatar
    ? `http://localhost:4000/static/uploads/${avatar}`
    : '';
  const navigate = useNavigate();


  return (
    <>
      <div className='business-review'>
        <div className='business'>
          <div className='business-info'>
            <h3> {bussinesName} </h3>
            <h5> {stateName}</h5>
            <Avatar size='medium' hideFigCaption avatarUrl={avatarUrl} />
            <h5>{url_web}</h5>
            {showProfileButton ? (
              <Button
                id='register-login'
                variant='outlined'
                color='primary'
                onClick={() => {
                  navigate(`/businessProfile/${id}`);
                }}
              >
                {' '}
                Ver Perfil
              </Button>
            ) : null}
          </div>
          <div className='top-info'>
            <div className='job-info'>
              <h5>
                <b>Puesto: </b>
                {job}
              </h5>
              <h5>
                <b>Rango salarial:</b> {salary_range}
              </h5>
              <h5>
                <b>Año de comienzo:</b> {startYear}
              </h5>{' '}
              <h5>
                {' '}
                <b>Año de fin: </b>
                {endYear}
              </h5>
            </div>
          </div>
          <div className='preview-valorations'>
            <div>
              <Typography component='legend'>
                <h5>Ambiente laboral</h5>
              </Typography>
              <Rating
                name='read-only'
                value={enviroment}
                readOnly
                size='large'
              />
            </div>

            <div>
              <Typography component='legend'>
                <h5>Conciliación</h5>
              </Typography>
              <Rating
                name='read-only'
                value={conciliation}
                readOnly
                size='large'
              />
            </div>

            <div>
              <Typography component='legend'>
                <h5>Oportunidades</h5>
              </Typography>
              <Rating
                name='read-only'
                value={oportunities}
                readOnly
                size='large'
              />
            </div>

            <div>
              {' '}
              <Typography component='legend'>
                <h5>Salario</h5>
              </Typography>
              <Rating name='read-only' value={salary} readOnly size='large' />
            </div>
          </div>
          <div className='comments-preview'>
            <div className='comments'>
              <h1> {title} </h1>
              <p className='comment'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

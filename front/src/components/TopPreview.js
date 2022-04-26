import { Button, Rating, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';
import Avatar from './Avatar';

export const TopPreview = (props) => {
  const {
    totalReviews,
    id,
    idBusiness,
    enviroment,
    conciliation,
    oportunities,
    salary,
    bussinesName,
    avatar,
  } = props;
  const [topBusiness, setTopBusiness, topBusinessInfo, setTopBusinessInfo] =
    useLoadTopBusiness();
  let comments = [];
  comments = topBusinessInfo.filter(
    (comment) => comment.idBusiness === idBusiness
  );

  const navigate = useNavigate();
  const avatarUrl = avatar
    ? `http://localhost:4000/static/uploads/${avatar}`
    : '';

  return (
    <>
      <div className='info'>
        <h1> {bussinesName} </h1>
        <Avatar size='medium' hideFigCaption avatarUrl={avatarUrl} />
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
        <h5>{totalReviews} Valoraciones</h5>
        <div>
          {''}
          <Typography component='legend'>Ambiente laboral</Typography>
          <Rating name='read-only' value={enviroment} readOnly />
          <Typography component='legend'>Conciliación</Typography>
          <Rating name='read-only' value={conciliation} readOnly />
          <Typography component='legend'>Oportunidades</Typography>
          <Rating name='read-only' value={oportunities} readOnly />
          <Typography component='legend'>Salario</Typography>
          <Rating name='read-only' value={salary} readOnly />
        </div>
      </div>
      <div className='comments'>
        {comments.map((comment) => (
          <p className='comment' key={comment.id}>
            {comment.description}
          </p>
        ))}
      </div>
    </>
  );
};

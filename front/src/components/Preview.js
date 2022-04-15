import { Rating, Typography } from '@mui/material';
import Avatar from './Avatar';

export const Preview = (props) => {
  const {
    enviroment,
    conciliation,
    oportunities,
    salary,
    title,
    description,
    stateName,
    bussinesName,
  } = props;

  return (
    <>
      <div className='info'>
        <h3> {bussinesName} </h3>
        <h5> {stateName}</h5>
        <Avatar size='medium' />
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

import { Rating, Typography } from '@mui/material';

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
      <h3> {bussinesName} </h3>
      <h5> {stateName}</h5>
      <h1> {title} </h1>
      <Typography component='legend'>Ambiente laboral</Typography>
      <Rating name='read-only' value={enviroment} readOnly />
      <Typography component='legend'>Conciliación</Typography>
      <Rating name='read-only' value={conciliation} readOnly />
      <Typography component='legend'>Oportunidades</Typography>
      <Rating name='read-only' value={oportunities} readOnly />
      <Typography component='legend'>Salario</Typography>
      <Rating name='read-only' value={salary} readOnly />

      <p className='comment'>{description}</p>
    </>
  );
};

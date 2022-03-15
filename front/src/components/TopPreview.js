import { Rating, Typography } from '@mui/material';
import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';

export const TopPreview = (props) => {
  const {
    idBusiness,
    enviroment,
    conciliation,
    oportunities,
    salary,
    bussinesName,
  } = props;
  const [topBusiness, setTopBusiness, topBusinessInfo, setTopBusinessInfo] =
    useLoadTopBusiness();
  let comments = [];
  comments = topBusinessInfo.filter(
    (comment) => comment.idBusiness === idBusiness
  );
  return (
    <>
      <h1> {bussinesName} </h1>
      <div className='ratings'>
        <Typography component='legend'>Ambiente laboral</Typography>
        <Rating name='read-only' value={enviroment} readOnly />
        <Typography component='legend'>Conciliación</Typography>
        <Rating name='read-only' value={conciliation} readOnly />
        <Typography component='legend'>Oportunidades</Typography>
        <Rating name='read-only' value={oportunities} readOnly />
        <Typography component='legend'>Salario</Typography>
        <Rating name='read-only' value={salary} readOnly />
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

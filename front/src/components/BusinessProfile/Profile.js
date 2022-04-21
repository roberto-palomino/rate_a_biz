import { Rating, Typography } from '@mui/material';
import Avatar from '../Avatar';

export const Profile = (props) => {
  const { businessName, headquarter, description, sector, url, reviews } =
    props;

  return (
    <>
      <div className='info'>
        <h3> {businessName} </h3>
        <Avatar size='medium' />

        <h4> Sede principal: {headquarter} </h4>
        <h4> {sector}</h4>
        <h4> {url}</h4>
        <h5> {description}</h5>
      </div>
      <div className='reviews'>
        {reviews.map((r) => (
          <div className='review' key={Math.random()}>
            <div className='comments' key={Math.random()}>
              <h1>{r.title}</h1>
              <p className='comment'>{r.description}</p>
            </div>
            <div className='valorations' key={Math.random()}>
              <div>
                <Typography component='legend'>Ambiente laboral</Typography>
                <Rating name='read-only' value={r.enviroment} readOnly />
              </div>
              <div>
                <Typography component='legend'>Conciliación</Typography>
                <Rating name='read-only' value={r.conciliation} readOnly />
              </div>
              <div>
                <Typography component='legend'>Oportunidades</Typography>
                <Rating name='read-only' value={r.oportunities} readOnly />
              </div>
              <div>
                <Typography component='legend'>Salario</Typography>
                <Rating name='read-only' value={r.salary} readOnly />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

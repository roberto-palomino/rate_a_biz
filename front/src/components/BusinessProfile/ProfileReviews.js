import { Rating, Typography } from '@mui/material';
import Avatar from '../Avatar';

export const ProfileReviews = (props) => {
  const { reviews } = props;

  return (
    <>
      <div className='profile-reviews-info'>
        {reviews.map((r) => (
          <div className='profile-review' key={Math.random()}>
            <div className='profile-left'>
              <div className='profile-author' key={Math.random()}>
                <Avatar
                  size='small'
                  username={r.username}
                  avatarUrl={
                    r.avatar
                      ? `http://localhost:4000/static/uploads/${r.avatar}`
                      : ''
                  }
                />
              </div>
              <div className='valorations' key={Math.random()}>
                <Typography component='legend'>Ambiente laboral</Typography>
                <Rating name='read-only' value={r.enviroment} readOnly />

                <Typography component='legend'>Conciliación</Typography>
                <Rating name='read-only' value={r.conciliation} readOnly />

                <Typography component='legend'>Oportunidades</Typography>
                <Rating name='read-only' value={r.oportunities} readOnly />

                <Typography component='legend'>Salario</Typography>
                <Rating name='read-only' value={r.salary} readOnly />
              </div>
            </div>
            <div className='comments' key={Math.random()}>
              {' '}
              <h1>{r.title}</h1>
              <p className='comment'>{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

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
                <div className='profile-rigth'>
                  <h5>
                    <b>Provincia: </b>
                    {r.nameStates}
                  </h5>
                  <h5>
                    <b>Puesto: </b>
                    {r.job}
                  </h5>
                  <h5>
                    <b>Rango salarial:</b> {r.salary_range}
                  </h5>
                  <h5>
                    <b>Año de comienzo:</b> {r.start_year}
                  </h5>{' '}
                  <h5>
                    {' '}
                    <b>Año de fin: </b>
                    {r.end_year}
                  </h5>
                </div>
              </div>
            </div>
            <div className='comments' key={Math.random()}>
              <div className='profile-valorations' key={Math.random()}>
                <div>
                  <Typography component='legend'>
                    <h5>Ambiente laboral</h5>
                  </Typography>
                  <Rating
                    name='read-only'
                    value={r.enviroment}
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
                    value={r.conciliation}
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
                    value={r.oportunities}
                    readOnly
                    size='large'
                  />
                </div>

                <div>
                  {' '}
                  <Typography component='legend'>
                    <h5>Salario</h5>
                  </Typography>
                  <Rating
                    name='read-only'
                    value={r.salary}
                    readOnly
                    size='large'
                  />
                </div>
              </div>{' '}
              <h1>{r.title}</h1>
              <p className='comment'>{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

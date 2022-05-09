import { Button, Rating, Typography } from '@mui/material';

import { useNavigate } from 'react-router';
import Avatar from '../Avatar';

export const PreviewNoReviews = (props) => {
  const {
    id,
    headquarter,
    sector,
    description,
    businessName,
    showProfileButton,
    avatar,
    url_web,
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
            <div className='info'>
              <h3> {businessName} </h3>
              <Avatar size='medium' hideFigCaption avatarUrl={avatarUrl} />

              <h4> Sede principal: {headquarter} </h4>
              <h4> {sector}</h4>
              <h4> {url_web}</h4>
              <h5> {description}</h5>
            </div>

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
          <div className='no-reviews'>
            <h5>
              Actualmente no tenemos ninguna valoración sobre esta empresa.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

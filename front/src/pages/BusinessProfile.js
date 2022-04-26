import { Preview } from '../components/Preview';
import { useLoadBusinessProfile } from '../hooks/useLoadBusinessProfile';
import { useParams } from 'react-router-dom';
import { Profile } from '../components/BusinessProfile/Profile';
import { ProfileReviews } from '../components/BusinessProfile/ProfileReviews';
import './BusinessProfile.css';

export const BusinessProfile = () => {
  const { id } = useParams();

  const [businessProfileInfo] = useLoadBusinessProfile(id);

  return (
    <>
      {businessProfileInfo ? (
        <div className='business-profile'>
          <div className='profile-preview'>
            <Profile
              businessName={businessProfileInfo.businessInfo.name}
              headquarter={businessProfileInfo.businessInfo.headquarter}
              description={businessProfileInfo.businessInfo.description}
              sector={businessProfileInfo.businessInfo.sector}
              url={businessProfileInfo.businessInfo.url_web}
              avatar={businessProfileInfo.userInfo.avatar}
            />
          </div>
          <div className='profile-reviews'>
            <ProfileReviews
              reviews={businessProfileInfo.businessInfo.reviews}
            />
          </div>
        </div>
      ) : (
        <div>CARGANDO!!!!!!!!!</div>
      )}
    </>
  );
};

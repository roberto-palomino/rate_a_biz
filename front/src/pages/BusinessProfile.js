import { Preview } from '../components/Preview';
import { useLoadBusinessProfile } from '../hooks/useLoadBusinessProfile';
import { useParams } from 'react-router-dom';
import { Profile } from '../components/BusinessProfile/Profile';

export const BusinessProfile = () => {
  const { id } = useParams();

  const [businessProfileInfo] = useLoadBusinessProfile(id);

  console.log('respuesta en profile', businessProfileInfo);

  return (
    <>
      {businessProfileInfo ? (
        <div className='preview'>
          <Profile
            businessName={businessProfileInfo.businessInfo.name}
            headquarter={businessProfileInfo.businessInfo.headquarter}
            description={businessProfileInfo.businessInfo.description}
            sector={businessProfileInfo.businessInfo.sector}
            url={businessProfileInfo.businessInfo.url_web}
            reviews={businessProfileInfo.businessInfo.reviews}
          />
        </div>
      ) : (
        <div>CARGANDO!!!!!!!!!</div>
      )}
    </>
  );
};

import { Preview } from '../components/Preview';
import { useLoadBusinessProfile } from '../hooks/useLoadBusinessProfile';
import { useParams } from 'react-router-dom';
import { Profile } from '../components/BusinessProfile/Profile';
import { ProfileReviews } from '../components/BusinessProfile/ProfileReviews';
import './BusinessProfile.css';
import Review from '../components/Review/Review';

export const BusinessProfile = () => {
  /* Obtenemos el id de los params */
  const { id } = useParams();

  /* Obtenemos al información del perfil a través de nuestro custom hook,
  al que le pasamos la variable ID de los params para saber que perfil cargar */
  const [businessProfileInfo] = useLoadBusinessProfile(id);

  /* Por último pintamos 3 componentes:
  Profile-> con la información de la empresa que viene en BusinessProfileInfo.businessInfo
  ProfileReviews-> con la información de las reviews de la empresa que obtenemos de BusinessProfileInfo.reviews
  Review-> Componente que no recibe props y que nos permite crear nuevas reviews */
  return (
    <>
      <div id='business-profile-div'>
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
            <div id='review-div'>
              <Review />
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
      </div>
    </>
  );
};

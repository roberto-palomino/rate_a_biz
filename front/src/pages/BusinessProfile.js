import { Preview } from '../components/Preview';
import { useLoadBusinessProfile } from '../hooks/useLoadBusinessProfile';
import { useParams } from 'react-router-dom';
import { Profile } from '../components/BusinessProfile/Profile';
import { ProfileReviews } from '../components/BusinessProfile/ProfileReviews';
import './BusinessProfile.css';
import useUserData from '../hooks/useUserData';
import { TokenContext } from '../index';
import Review from '../components/Review/Review';
import { useContext, useState } from 'react';
import { OrderBy } from '../components/OrderBy';
import { Order } from '../components/Order';
import { Button, Stack } from '@mui/material';

export const BusinessProfile = () => {
  /* Obtenemos el id de los params */
  const { id } = useParams();

  /* Comprobamos el rol del usuario para ver si es trabajador o empresa y mostrar o no el campo review */
  const [token] = useContext(TokenContext);
  const { userRole } = useUserData(token);
  console.log(userRole);

  /* Obtenemos al información del perfil a través de nuestro custom hook,
  al que le pasamos la variable ID de los params para saber que perfil cargar */
  const [businessProfileInfo] = useLoadBusinessProfile(id);

  /*Creamos los estados para almacenar las funciones de ordenación de los resultados  */

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderBy, setOrderBy] = useState('');

  /* Creamos un estado para almacenar la nueva información ordenada */
  const [orderedBusinessInfo, setOrderedBusinessInfo] = useState('');

  /* Función que pide la información con los parametros de ordenado */
  const loadBusinessProfileInfo = async () => {
    try {
      const data = {
        orderBy: orderBy,
        direction: selectedOrder,
      };
      const serializedData = JSON.stringify(data);
      const res = await fetch(`http://localhost:4000/business/${id}`, {
        method: 'POST',
        body: serializedData,
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await res.json();

      setOrderedBusinessInfo(body.data);
    } catch (e) {
      console.error('Err:', e);
    }
  };

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
              {userRole === 'business' ? null : (
                <Review setOrderedBusinessInfo={setOrderedBusinessInfo} />
              )}
            </div>
            <hr></hr>
            <div className='profile-orders'>
              <OrderBy
                className='button'
                orderBy={orderBy}
                setOrderBy={setOrderBy}
              />
              <Order setSelectedOrder={setSelectedOrder} />
              <Stack id='apply' width={150} spacing={2}>
                <Button
                  className='filtrar'
                  variant='outlined'
                  onClick={loadBusinessProfileInfo}
                >
                  Aplicar
                </Button>
              </Stack>
            </div>
            <div className='profile-reviews'>
              {orderedBusinessInfo ? (
                <ProfileReviews
                  reviews={orderedBusinessInfo.businessInfo.reviews}
                />
              ) : (
                <ProfileReviews
                  reviews={businessProfileInfo.businessInfo.reviews}
                />
              )}
            </div>
          </div>
        ) : (
          <div className='loading'>
            <img
              id='loading-gif'
              src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'
              alt='Loading-gif'
              border='0'
            />
          </div>
        )}
      </div>
    </>
  );
};

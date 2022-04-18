import React, { useContext, useState } from 'react';
import EditUser from '../components/EditUser';
import useUserData from '../hooks/useUserData';
import useBusinessData from '../hooks/useBusinessData';
import { TokenContext } from '../index';
import './Profile.css';
import { Preview } from '../components/Preview';

export const BusinessProfile = () => {
  const [businessProfileInfo, setBusinessProfileInfo] = useState('');

  console.log('info en profile', businessProfileInfo);
  return (
    <div className='preview' key={businessProfileInfo.id}>
      <Preview
        key={businessProfileInfo.reviews.id}
        enviroment={businessProfileInfo.reviews.enviroment}
        conciliation={businessProfileInfo.reviews.conciliation}
        oportunities={businessProfileInfo.reviews.oportunities}
        salary={businessProfileInfo.reviews.salary}
        title={businessProfileInfo.reviews.title}
        description={businessProfileInfo.reviews.description}
        stateName={businessProfileInfo.reviews.nameStates}
        bussinesName={businessProfileInfo.reviews.name}
        setBusinessProfileInfo={setBusinessProfileInfo}
        businessProfileInfo={businessProfileInfo}
      />
    </div>
  );
};

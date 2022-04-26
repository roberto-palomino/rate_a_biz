import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';

import { useState } from 'react';

export const BusinessPreview = (props) => {
  const { filterBusiness } = props;
  const [business, setBusiness] = useLoadBusiness();
  const [showProfileButton, setShowProfileButton] = useState(true);

  return (
    <>
      <div className='info'>
        {filterBusiness
          ? filterBusiness.map((business) => (
              <div className='preview' key={Math.random()}>
                <Preview
                  id={business.idUser}
                  key={Math.random()}
                  enviroment={business.enviroment}
                  conciliation={business.conciliation}
                  oportunities={business.oportunities}
                  salary={business.salary}
                  title={business.title}
                  description={business.description}
                  stateName={business.nameStates}
                  bussinesName={business.name}
                  showProfileButton={showProfileButton}
                  avatar={business.avatar}
                />
              </div>
            ))
          : business.map((business) => (
              <div className='preview' key={business.id}>
                <Preview
                  id={business.idUser}
                  key={business.id}
                  enviroment={business.enviroment}
                  conciliation={business.conciliation}
                  oportunities={business.oportunities}
                  salary={business.salary}
                  title={business.title}
                  description={business.description}
                  stateName={business.nameStates}
                  bussinesName={business.name}
                  showProfileButton={showProfileButton}
                  avatar={business.avatar}
                />
              </div>
            ))}
      </div>
    </>
  );
};

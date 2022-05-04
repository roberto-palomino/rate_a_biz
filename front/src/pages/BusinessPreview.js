import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';

import { useState } from 'react';
import { TopBusiness } from '../components/TopBusiness';
import { NotMaches } from '../components/Search/NotMatches';

export const BusinessPreview = (props) => {
  const { filterBusiness } = props;
  const [business, setBusiness] = useLoadBusiness();
  const [showProfileButton, setShowProfileButton] = useState(true);
  console.log('filterbusiness', filterBusiness);

  return (
    <>
      <div className='info'>
        {filterBusiness ? (
          filterBusiness.length === 0 ? (
            <NotMaches />
          ) : (
            filterBusiness.map((business) => (
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
                  startYear={business.start_year}
                  endYear={business.end_year}
                  url_web={business.url_web}
                  salary_range={business.salary_range}
                  job={business.job}
                />
              </div>
            ))
          )
        ) : (
          <>
            <div className='top10'>
              {' '}
              <h1>TOP 10 Empresas mejor valoradas de España</h1>
            </div>
            <div className='top-reviews'>
              <TopBusiness className='top-preview' />
            </div>
          </>
        )}
      </div>
    </>
  );
};

import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';

import { useState } from 'react';
import { TopBusiness } from '../components/TopBusiness';
import { NotMaches } from '../components/Search/NotMatches';
import { PreviewNoReviews } from '../components/Search/PreviewNoReviews';

export const BusinessPreview = (props) => {
  const { filterBusiness } = props;

  const [showProfileButton, setShowProfileButton] = useState(true);

  return (
    <>
      <div className='info'>
        {filterBusiness ? (
          filterBusiness === 'no matches' ? (
            <NotMaches />
          ) : filterBusiness[0].enviroment ? (
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
                  businessName={business.name}
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
          ) : (
            <div className='preview' key={Math.random()}>
              <PreviewNoReviews
                id={filterBusiness[0].idUser}
                key={Math.random()}
                sector={filterBusiness[0].sector}
                description={filterBusiness[0].description}
                headquarter={filterBusiness[0].headquarter}
                businessName={filterBusiness[0].name}
                showProfileButton={showProfileButton}
                avatar={filterBusiness[0].avatar}
                url_web={filterBusiness[0].url_web}
              />
            </div>
          )
        ) : (
          <>
            <div className='top10'>
              {' '}
              <h1>TOP Empresas mejor valoradas de España</h1>
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

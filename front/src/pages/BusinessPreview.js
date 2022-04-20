import { Button, Stack } from '@mui/material';
import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';
import SendIcon from '@mui/icons-material/Send';
import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';
import { useState } from 'react';

export const BusinessPreview = (props) => {
  const { filterBusiness } = props;
  const [business, setBusiness] = useLoadBusiness();
  const [showProfileButton, setShowProfileButton] = useState(true);
  console.log('filter', filterBusiness);
  console.log('business', business);
  return (
    <>
      <div className='info'>
        {/* <Stack className='filter' width={150} spacing={2}>
        <Button
          id='register'
          variant='outlined'
          color='secondary'
          startIcon={<SendIcon />}
        >
          Registrarse
        </Button>
      </Stack> */}
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
                />
              </div>
            ))}
      </div>
    </>
  );
};

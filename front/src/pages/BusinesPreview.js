import { Button, Stack } from '@mui/material';
import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';
import SendIcon from '@mui/icons-material/Send';
import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';

export const BusinessPreview = (props) => {
  const { filterBusiness } = props;
  const [business, setBusiness] = useLoadBusiness();
  console.log('filter', filterBusiness);
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
                  key={Math.random()}
                  enviroment={business.enviroment}
                  conciliation={business.conciliation}
                  oportunities={business.oportunities}
                  salary={business.salary}
                  title={business.title}
                  description={business.description}
                  stateName={business.nameStates}
                  bussinesName={business.name}
                />
              </div>
            ))
          : business.map((business) => (
              <div className='preview' key={business.id}>
                <Preview
                  key={business.id}
                  enviroment={business.enviroment}
                  conciliation={business.conciliation}
                  oportunities={business.oportunities}
                  salary={business.salary}
                  title={business.title}
                  description={business.description}
                  stateName={business.nameStates}
                  bussinesName={business.name}
                />
              </div>
            ))}
      </div>
    </>
  );
};

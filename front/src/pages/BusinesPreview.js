import { Button, Stack } from '@mui/material';
import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';
import SendIcon from '@mui/icons-material/Send';
import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';

export const BusinessPreview = (props) => {
  const { idSalaries, idJobs, idBussines_states, idSector, order, direction } =
    props;
  const [business, setBusiness] = useLoadBusiness();

  const loadBusiness = async (e) => {
    if (idSalaries | idJobs | idBussines_states | idSector)
      try {
        const data = {
          idSalaries: idSalaries,
          idJobs: idJobs,
          idBussines_states: idBussines_states,
          idSector: idSector,
        };
        const serializedData = JSON.stringify(data);
        const res = await fetch(' http://localhost:4000/business ', {
          method: 'GET',
          body: serializedData,
          headers: {
            'Content-type': 'application/json',
          },
        });
        const bodyRes = await res.json();
        /*  setBusiness(bodyRes); */
        console.log('respuesta', bodyRes);
      } catch (e) {
        console.error('Ha ocurrido un error', e);
      }
    else {
      try {
        const res = await fetch(' http://localhost:4000/business ', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const bodyRes = await res.json();
        /* setBusiness(bodyRes); */
        console.log('respuesta sin data', bodyRes);
      } catch (e) {
        console.error('Ha ocurrido un error', e);
      }
    }
  };
  return (
    <>
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
      {business.map((business) => (
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
    </>
  );
};

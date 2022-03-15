import { Button, Stack } from '@mui/material';
import { Preview } from '../components/Preview';
import { useLoadBusiness } from '../hooks/useLoadBusiness';
import SendIcon from '@mui/icons-material/Send';
import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';
import { TopPreview } from '../components/TopPreview';

export const TopBusiness = (props) => {
  const [topBusiness] = useLoadTopBusiness();

  return (
    <>
      {topBusiness.map((business) => (
        <div className='top-preview' key={business.idBusiness}>
          <TopPreview
            idBusiness={business.idBusiness}
            key={business.id}
            enviroment={parseInt(business.enviroment)}
            conciliation={parseInt(business.conciliation)}
            oportunities={parseInt(business.oportunities)}
            salary={parseInt(business.salary)}
            bussinesName={business.name}
          />
        </div>
      ))}
    </>
  );
};

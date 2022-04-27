import { useLoadTopBusiness } from '../hooks/useLoadTopBusiness';
import { TopPreview } from './TopPreview';

export const TopBusiness = (props) => {
  const [topBusiness] = useLoadTopBusiness();

  return (
    <>
      {topBusiness.map((business) => (
        <div className='top-preview' key={business.idBusiness}>
          <TopPreview
            totalReviews={business.total}
            id={business.id}
            idBusiness={business.idBusiness}
            key={business.id}
            enviroment={parseInt(business.enviroment)}
            conciliation={parseInt(business.conciliation)}
            oportunities={parseInt(business.oportunities)}
            salary={parseInt(business.salary)}
            bussinesName={business.name}
            avatar={business.avatar}
          />
        </div>
      ))}
    </>
  );
};

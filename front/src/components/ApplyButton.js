import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import './filter.css';

export default function ApplyButton(props) {
  const {
    selectedSalary,
    selectedJob,
    selectedState,
    selectedSector,
    orderBy,
    direction,
    name,
    apply,
    setFilterBusiness,
  } = props;

  const loadBusiness = async (e) => {
    /*  if (selectedSalary | selectedJob | selectedState | selectedSector) */
    try {
      const data = {
        idSalaries: selectedSalary,
        idJobs: selectedJob,
        idStates: selectedState,
        idSector: selectedSector,
        orderBy: orderBy,
        direction: direction,
        name: name,
      };
      const serializedData = JSON.stringify(data);
      const res = await fetch(' http://localhost:4000/business ', {
        method: 'POST',
        body: serializedData,
        headers: {
          'Content-type': 'application/json',
        },
      });
      const bodyRes = await res.json();
      setFilterBusiness(bodyRes.data.business);
      console.log('respuesta', bodyRes);
    } catch (e) {
      console.error('Ha ocurrido un error', e);
    }
    /*   else {
      try {
        const res = await fetch(' http://localhost:4000/business ', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const bodyRes = await res.json();
        setBusiness(bodyRes);
        console.log('respuesta sin data', bodyRes);
      } catch (e) {
        console.error('Ha ocurrido un error', e);
      }
    } */
  };
  return (
    <Stack id='apply' width={150} spacing={2}>
      <Button
        className='filtrar'
        variant='outlined'
        onClick={loadBusiness}
        endIcon={<SearchSharpIcon />}
      >
        Buscar
      </Button>
    </Stack>
  );
}

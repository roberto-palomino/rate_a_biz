import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './filter.css';

export default function ResetButton(props) {
  const {
    setSelectedSalary,
    setSelectedJob,
    setSelectedState,
    setSelectedSector,
    setOrderBy,
    setSelectedOrder,
    setFilterBusiness,
  } = props;

  const reset = () => {
    setSelectedSalary('');
    setSelectedState('');
    setSelectedJob('');
    setSelectedState('');
    setSelectedSector('');
    setOrderBy('');
    setSelectedOrder(null);
    setFilterBusiness('');
  };
  return (
    <Stack className='filter' width={150} spacing={2}>
      <Button className='filtrar' variant='outlined' onClick={reset}>
        Reset
      </Button>
    </Stack>
  );
}

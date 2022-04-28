import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ResetButton(props) {
  /* Obtenemos de props las funciones para setear los estados */
  const {
    setSelectedSalary,
    setSelectedJob,
    setSelectedState,
    setSelectedSector,
    setOrderBy,
    setSelectedOrder,
    setFilterBusiness,
  } = props;

  /* Función que setea los estados a como estaban originalmente */
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
    <Stack id='apply' width={150} spacing={2}>
      <Button className='filtrar' variant='outlined' onClick={reset}>
        Reset
      </Button>
    </Stack>
  );
}

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ReviewResetButton(props) {
  /* Obtenemos por props las funciones para setear los estados */
  const {
    setSelectedSalary,
    setSelectedJob,
    setSelectedState,
    setTitle,
    setDescription,
    setStartYear,
    setEndYear,
    setEnviroment,
    setSalary,
    setOportunities,
    setConciliation,
  } = props;

  /* Creamos la función que resetea los estados al valor inicial */
  const reset = () => {
    setSelectedSalary('');
    setSelectedState('');
    setSelectedJob('');
    setSelectedState('');
    setTitle('Título');
    setDescription('Escribe aquí tu comentario');
    setStartYear('');
    setEndYear('');
    setEnviroment('');
    setOportunities('');
    setSalary('');
    setConciliation('');
  };
  return (
    <Stack className='reset' width={150} spacing={2}>
      <Button id='reset' variant='outlined' onClick={reset}>
        Reset
      </Button>
    </Stack>
  );
}

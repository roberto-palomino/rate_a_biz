import Button from '@mui/material/Button';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Stack from '@mui/material/Stack';

export default function FilterButton(props) {
  const { filterVisible, setFilterVisible } = props;
  /* Con esta función mostramos u ocultamos las opciones de filtrado, cambiando el estado del botón a true o false */
  const filterChange = (e) => {
    if (!filterVisible) {
      setFilterVisible('visible');
    } else {
      setFilterVisible('');
    }
  };
  return (
    <Stack className='filter' width={150} spacing={2}>
      <Button
        variant='outlined'
        startIcon={<SearchSharpIcon />}
        onClick={filterChange}
      >
        Filtrar
      </Button>
    </Stack>
  );
}

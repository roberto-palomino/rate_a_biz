import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import './filter.css';

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
    <Stack
      className='select'
      width={150}
      spacing={2}
      sx={{
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Button
        id='filter-button'
        className='filtrar'
        variant='text'
        /* endIcon={<SearchSharpIcon />} */
        onClick={filterChange}
      >
        {filterVisible ? 'Ocultar filtros' : 'Mostrar filtros'}
      </Button>
    </Stack>
  );
}

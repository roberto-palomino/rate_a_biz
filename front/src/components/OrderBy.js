import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/* Componente que nos devuelve las opciones por las que podemos ordenar los resultados */
export const OrderBy = (props) => {
  const { orderBy, setOrderBy } = props;
  const orderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 125 }}>
        <InputLabel id='ordenar'>Ordenar por</InputLabel>
        <Select
          labelId='ordenar'
          id='ordenar'
          value={orderBy}
          label='ordenar'
          onChange={orderByChange}
        >
          <MenuItem key='1' value='enviroment'>
            Ambiente laboral
          </MenuItem>
          <MenuItem key='2' value='conciliation'>
            Conciliación
          </MenuItem>
          <MenuItem key='3' value='oportunities'>
            Oportunidades
          </MenuItem>
          <MenuItem key='4' value='salary'>
            Salario
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

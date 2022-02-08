import { useLoadSalaries } from '../hooks/useLoadSalaries';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectSalary = (props) => {
  const [salary] = useLoadSalaries();
  const { setSelectedSalary } = props;
  const stateChange = (e) => {
    setSelectedSalary(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 145 }}>
        <InputLabel id='Salario'>Rango salarial</InputLabel>
        <Select
          labelId='Salario'
          id='Salario'
          value={''}
          label='Salario'
          onChange={stateChange}
        >
          {salary.map((salary) => (
            <MenuItem key={salary.id} value={salary.id}>
              {salary.salary_range}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

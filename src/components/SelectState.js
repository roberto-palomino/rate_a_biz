import { useLoadStates } from '../hooks/useLoadStates';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectState = (props) => {
  const [states] = useLoadStates();
  const { selectedState, setSelectedState } = props;
  const stateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <>
      <FormControl
        variant='standard'
        sx={{ m: 1, width: 145 }}
        className='select'
      >
        <InputLabel id='Provincia'>Provincia</InputLabel>
        <Select
          labelId='Provincia'
          id='Provincia'
          value={selectedState}
          label='Provincia'
          onChange={stateChange}
        >
          {states.map((state) => (
            <MenuItem key={state.id} value={state.id}>
              {state.nameStates}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

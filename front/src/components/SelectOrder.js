import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectOrder = (props) => {
  const { setSelectedOrder } = props;
  const orderChange = (e) => {
    setSelectedOrder(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 90 }}>
        <InputLabel id='orden'>Orden</InputLabel>
        <Select
          labelId='orden'
          id='orden'
          value={''}
          label='orden'
          onChange={orderChange}
        >
          <MenuItem key='1' value='asc'>
            Ascendente
          </MenuItem>
          <MenuItem key='2' value='desc'>
            Descendente
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

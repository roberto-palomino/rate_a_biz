import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BusinessSelect = (props) => {
  const { selectItem, setSelectItem, disabled, options, inputId, label } =
    props;

  const selectChange = (e) => {
    setSelectItem(e.target.value);
  };

  return (
    <FormControl
<<<<<<< HEAD
      sx={{ m: 1, minWitdh: 150 }}
=======
      sx={{ m: 1, minWidth: 150 }}
>>>>>>> 9d3d6e108ca96703bd42631b0082625fcf628736
      className='BusinessSelect'
      variant='standard'
    >
      <InputLabel id={inputId}>{label}</InputLabel>
      <Select
        labelId={inputId}
        id={`select-id-${label}`}
        disabled={disabled}
        value={selectItem}
        onChange={selectChange}
      >
        <MenuItem value={''}></MenuItem>
        {options}
      </Select>
    </FormControl>
  );
};

export default BusinessSelect;

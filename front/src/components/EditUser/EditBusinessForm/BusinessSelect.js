import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BusinessSelect = props => {
  const { selectItem, setSelectItem, disabled, options, inputId, label } =
    props;

  const selectChange = e => {
    setSelectItem(e.target.value);
  };

  return (
    <FormControl
      sx={{ minWidth: 202 }}
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

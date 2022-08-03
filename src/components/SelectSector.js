import { useLoadSectors } from '../hooks/useLoadSectors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectSector = (props) => {
  const [sectors] = useLoadSectors();
  const { selectedSector, setSelectedSector } = props;
  const sectorChange = (e) => {
    setSelectedSector(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 145 }} className='select'>
        <InputLabel id='Sector'>Sector</InputLabel>
        <Select
          labelId='Sector'
          id='Sector'
          value={selectedSector}
          label='Sector'
          onChange={sectorChange}
        >
          {sectors.map((sector) => (
            <MenuItem key={sector.id} value={sector.id}>
              {sector.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

import { useLoadStates } from '../hooks/useLoadStates';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectJob = (props) => {
  const [jobs] = useLoadStates();
  const { setSelectedJob } = props;
  const jobChange = (e) => {
    setSelectedJob(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 120 }}>
        <InputLabel id='Trabajo'>Trabajo</InputLabel>
        <Select
          labelId='Trabajo'
          id='Trabajo'
          value={''}
          label='Trabajo'
          onChange={jobChange}
        >
          {jobs.map((job) => (
            <MenuItem key={job.id} value={job.id}>
              {job.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

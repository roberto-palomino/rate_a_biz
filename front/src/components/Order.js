import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import Button from '@mui/material/Button';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Stack from '@mui/material/Stack';

export const Order = (props) => {
  const { setSelectedOrder } = props;
  const orderUp = () => {
    setSelectedOrder('asc');
  };
  const orderDown = () => {
    setSelectedOrder('desc');
  };

  return (
    <>
      <Stack className='filter' width={90} spacing={2}>
        <abbr title='ORDEN ASCENDENTE'>
          <Button
            variant='outlined'
            startIcon={<ArrowDropUpSharpIcon />}
            onClick={orderUp}
          ></Button>
        </abbr>
        <abbr title='ORDEN DESCENDENTE'>
          <Button
            variant='outlined'
            startIcon={<ArrowDropDownSharpIcon />}
            onClick={orderDown}
          ></Button>
        </abbr>
      </Stack>
    </>
  );
};

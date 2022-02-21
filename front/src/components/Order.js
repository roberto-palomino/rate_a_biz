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
      <Stack className='filter' width={40} spacing={1}>
        <abbr title='ORDEN ASCENDENTE'>
          <Button
            id='order'
            variant='outlined'
            startIcon={<ArrowDropUpSharpIcon id='arrow' />}
            onClick={orderUp}
          ></Button>
        </abbr>
        <abbr title='ORDEN DESCENDENTE'>
          <Button
            id='order'
            variant='outlined'
            startIcon={<ArrowDropDownSharpIcon id='arrow' />}
            onClick={orderDown}
          ></Button>
        </abbr>
      </Stack>
    </>
  );
};

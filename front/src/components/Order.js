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
      <div className='filter-buttons'>
        <abbr title='ORDEN ASCENDENTE' className='select'>
          <Button
            id='order'
            variant='outlined'
            startIcon={<ArrowDropUpSharpIcon id='arrow' />}
            onClick={orderUp}
            color='secondary'
            className='select'
          ></Button>
        </abbr>
        <abbr title='ORDEN DESCENDENTE' className='select'>
          <Button
            id='order'
            variant='outlined'
            startIcon={<ArrowDropDownSharpIcon id='arrow' />}
            onClick={orderDown}
            color='secondary'
          ></Button>
        </abbr>
      </div>
    </>
  );
};

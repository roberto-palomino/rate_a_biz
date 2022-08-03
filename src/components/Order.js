import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import Button from '@mui/material/Button';

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
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={0.5}
          sx={{
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <abbr title='ORDEN ASCENDENTE' className='select-abbr'>
            <Button
              id='order'
              variant='standard'
              startIcon={<ArrowDropUpSharpIcon id='arrow' />}
              onClick={orderUp}
              color='secondary'
              className='select'
            ></Button>
          </abbr>
          <abbr title='ORDEN DESCENDENTE' className='select-abbr'>
            <Button
              id='order'
              variant='standard'
              startIcon={<ArrowDropDownSharpIcon id='arrow' />}
              onClick={orderDown}
              color='secondary'
            ></Button>
          </abbr>
        </Stack>
      </div>
    </>
  );
};

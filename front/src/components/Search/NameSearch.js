import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

export const NameSearch = (props) => {
  const { name, setName, setFilterBusiness } = props;
  const nameChange = (e) => {
    setName(e.target.value);
  };

  /*   const loadBusiness = async (e) => {
    try {
      const data = {
        name: name,
      };
      const serializedData = JSON.stringify(data);
      const res = await fetch(' http://localhost:4000/business ', {
        method: 'POST',
        body: serializedData,
        headers: {
          'Content-type': 'application/json',
        },
      });
      const bodyRes = await res.json();
      setFilterBusiness(bodyRes.data.business);
      console.log('respuesta', bodyRes);
    } catch (e) {
      console.error('Ha ocurrido un error', e);
    }
  }; */

  return (
    <>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: 400,
          borderRadius: '10px',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Busca por nombre'
          inputProps={{ 'aria-label': 'Busca por nombre' }}
          onChange={nameChange}
        />
        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        <IconButton
          type='submit'
          sx={{ p: '10px' }}
          aria-label='search'
          onClick={loadBusiness}
        >
          <SearchIcon />
        </IconButton> */}
      </Paper>
    </>
  );
};

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectYear = (props) => {
  /* Obtenemos los estados por props. 
    A mayores obtenemos la prop START que determina si es startYear o endYear
    y así podemos reutilizar el componente */
  const { endYear, setEndYear, startYear, setStartYear, start } = props;

  /* Creamos las dos funciones manejadoras (start y end year) */
  const endYearChange = (e) => {
    setEndYear(e.target.value);
  };
  const startYearChange = (e) => {
    setStartYear(e.target.value);
  };

  /* Constantes con los años que queremos mostrar */
  const yearsStart = [
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  const yearsEnd = [
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];

  /* Si tenemos la prop Start se mostrará la opción startYear y en caso contrario la opción endYear */
  return (
    <>
      {start ? (
        <FormControl
          variant='standard'
          sx={{ m: 1, width: 145 }}
          className='select'
        >
          <InputLabel id='start-year'>Año comienzo</InputLabel>
          <Select
            labelId='start-year'
            id='start-year'
            value={startYear}
            label='start-year'
            onChange={startYearChange}
          >
            {yearsStart.map((year) => (
              <MenuItem key={Math.random()} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <FormControl
          variant='standard'
          sx={{ m: 1, width: 145 }}
          className='select'
        >
          <InputLabel id='end-year'>Año fin</InputLabel>
          <Select
            labelId='end-year'
            id='end-year'
            value={endYear}
            label='end-year'
            onChange={endYearChange}
          >
            {yearsEnd.map((year) => (
              <MenuItem key={Math.random()} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import Stack from '@mui/material/Stack';

export default function ShowButton(props) {
  const { reviewVisible, setReviewVisible } = props;
  /* Con esta función mostramos u ocultamos el componente de review, cambiando el estado del botón a true o false */
  const showChange = (e) => {
    if (!reviewVisible) {
      setReviewVisible('visible');
    } else {
      setReviewVisible('');
    }
  };
  return (
    <Stack className='select' width={150} spacing={2}>
      <Button
        className='filtrar'
        variant='outlined'
        startIcon={<MessageIcon />}
        onClick={showChange}
      >
        Comentar
      </Button>
    </Stack>
  );
}

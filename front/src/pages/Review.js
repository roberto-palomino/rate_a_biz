import './Review.css';
import { Avatar } from '@mui/material';
import React, { useContext, useState } from 'react';
import useUserData from '../hooks/useUserData';
import { TokenContext } from '../index';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <>
      <Stack spacing={1}>
        <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
        Conciliacion
        <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
        Ambiente
        <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
        Salario
        <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
        Oportunidades
      </Stack>
      <form>
        <label>
          Titulo:
          <input type='text' name='name' />
        </label>
        <label>
          Comentario:
          <textarea>¿Cómo valorarías a esta empresa?</textarea>{' '}
        </label>
        <input type='submit' value='Enviar' />
      </form>
      <div></div>
      {/* <button>Enviar</button> */}
    </>
  );
}

// export const Comment = ({ title, description }) => {
//   return (
//     <div>
//       <textarea>¿Cómo valorarías a esta empresa?</textarea>
//     </div>
//   );
// };

// export const Review = ({
//   Avatar,
//   SelectJob,
//   SelectSalary,
//   SelectState,
//   SelectSector,
// }) => {
//   const [id, setId] = useState(id);

//   return <div></div>;
// };

import './Review.css';
import { Avatar } from '@mui/material';
import React, { useContext, useState } from 'react';
import useUserData from '../hooks/useUserData';
import { TokenContext } from '../index';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
      <Rating
        name='half-rating-read'
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
export const Review = ({
  id,
  Avatar,
  SelectJob,
  SelectSalary,
  SelectState,
  SelectSector,
}) => {
  const [id, setId] = useState(id);

  return <div></div>;
};

import useBusinessData from '../../hooks/useBusinessData';
import { useState, useRef } from 'react';
import { Button, Rating, Typography } from '@mui/material';
import Avatar from './Avatar';
import { useNavigate } from 'react-router';

const AddReviewForm = (props) => {
  const {
    idBusiness_states,
    idUser,
    idBusiness,
    stateName,
    bussinesName,
    headquarter,
    sector,
    url,
    avatar
  } = props;
  const avatarUrl = avatar
    ? `http://localhost:4000/static/uploads/${avatar}`
    : '';
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start_year, setStart_Year] = useState('');
  const [end_year, setEnd_Year] = useState('');

  const [valuations, setValuations] = useState({
    salary: 1,
    environment: 1,
    conciliaiton: 1,
    opportunities: 1,
  });


  return (
    <>
      <div className='review'>
        <h3> {businessName} </h3>
        <Avatar size='medium' hideFigCaption avatarUrl={avatarUrl} />
        <h4> {bussinesName}</h4>
        <h4> Sede principal: {headquarter} </h4>
        <h4> {sector}</h4>
        <h4> {url}</h4>

      </div>
    </>
  );
};








};

export default AddReviewForm;

import {
  Button,
  Rating,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { SelectJob } from '../SelectJob';
import { SelectSalary } from '../SelectSalary';
import { SelectState } from '../SelectState';
import ShowButton from './ShowButton';
import SendIcon from '@mui/icons-material/Send';
import ReviewResetButton from './ReviewResetButton';
import { SelectYear } from './SelectYear';
import './Review.css';
import { TokenContext } from '../../../src/index';
import { LoginModal } from '../LoginModal/LoginModal';
import MessageIcon from '@mui/icons-material/Message';
import toast, { Toaster } from 'react-hot-toast';

export default function Review(props) {
  /* Obtenemos el ID de la empresa de los params */
  const { id } = useParams();

  /*Obtenemos el token del usuario que realiza la review  */
  const [token] = useContext(TokenContext);

  /*Obtenemos de props la función para setear el estado que muestra los mensajes para recargarlos cuando haya una nueva review  */
  const { setOrderedBusinessInfo } = props;

  /* Creamos los estados para almacenar la información que vamos a mandar */
  const [selectedState, setSelectedState] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [salary, setSalary] = useState('');
  const [enviroment, setEnviroment] = useState('');
  const [conciliation, setConciliation] = useState('');
  const [oportunities, setOportunities] = useState('');
  const [title, setTitle] = useState('Título');
  const [description, setDescription] = useState('Escribe aquí tu comentario');
  const [endYear, setEndYear] = useState('');
  const [startYear, setStartYear] = useState('');

  /* Estado para hacer visible el formulario u ocultarlo */
  const [reviewVisible, setReviewVisible] = useState('');
  const [loginVisible, setLoginVisible] = useState('');
  const [profileId, setProfileId] = useState('');

  /* Funciones para guardar los cambios de estado */
  const salaryChange = (e) => {
    setSalary(e.target.value);
  };
  const enviromentChange = (e) => {
    setEnviroment(e.target.value);
  };
  const conciliationChange = (e) => {
    setConciliation(e.target.value);
  };
  const oportunitiesChange = (e) => {
    setOportunities(e.target.value);
  };
  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  /* Función que muestra el componente de comentar si hay token
  o te muestra el enlace a login */
  const showChange = (e) => {
    setProfileId(id);
    if (!reviewVisible) {
      setReviewVisible('visible');
      if (!token) setLoginVisible('visible');
    } else {
      setReviewVisible('');
    }
  };
  /* Función para recargar los mensajes cuando se hace una review nueva */
  const loadBusinessProfileInfo = async () => {
    try {
      const res = await fetch(`http://localhost:4000/business/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await res.json();

      setOrderedBusinessInfo(body.data);
    } catch (e) {
      console.error('Err:', e);
    }
  };

  /* Función que envía la información y crea la review */
  const newReview = async (e) => {
    try {
      /* Creamos una constante con la información para enviarla */
      const data = {
        idJobs: selectedJob,
        idSalaries: selectedSalary,
        idStates: selectedState,
        start_year: startYear,
        end_year: endYear,
        salary: salary,
        enviroment: enviroment,
        conciliation: conciliation,
        oportunities: oportunities,
        title: title,
        description: description,
      };
      const serializedData = JSON.stringify(data);
      const res = await fetch(`http://localhost:4000/review/${id}`, {
        method: 'POST',
        body: serializedData,
        headers: {
          'Content-type': 'application/json',
          Authorization: token,
        },
      });
      const bodyRes = await res.json();
      const message = bodyRes.message;

      if (bodyRes.status === 'ok') {
        toast.success(message);
        loadBusinessProfileInfo();
      } else {
        toast.error('Faltan campos');
      }
    } catch (error) {
      console.error('Ha ocurrido un error', e);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className='review'>
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
        {loginVisible ? <LoginModal profileId={profileId} /> : null}
        {reviewVisible && token ? (
          <>
            <div className='new-review'>
              {' '}
              <div id='review-selectors'>
                <SelectState
                  className='select'
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                />
                <SelectJob
                  selectedJob={selectedJob}
                  setSelectedJob={setSelectedJob}
                />
                <SelectSalary
                  selectedSalary={selectedSalary}
                  setSelectedSalary={setSelectedSalary}
                />

                <SelectYear
                  endYear={endYear}
                  setEndYear={setEndYear}
                  startYear={startYear}
                  setStartYear={setStartYear}
                  start={true}
                />
                <SelectYear
                  endYear={endYear}
                  setEndYear={setEndYear}
                  startYear={startYear}
                  setStartYear={setStartYear}
                />
                <ReviewResetButton
                  setSelectedState={setSelectedState}
                  setSelectedJob={setSelectedJob}
                  setSelectedSalary={setSelectedSalary}
                  setTitle={setTitle}
                  setDescription={setDescription}
                  setStartYear={setStartYear}
                  setEndYear={setEndYear}
                  setSalary={setSalary}
                  setEnviroment={setEnviroment}
                  setConciliation={setConciliation}
                  setOportunities={setOportunities}
                />
              </div>
              <div id='review-rating'>
                {''}
                <Typography component='legend'>Ambiente laboral</Typography>
                <Rating
                  name='read-only'
                  value={parseInt(enviroment)}
                  onChange={enviromentChange}
                />
                <Typography component='legend'>Conciliación</Typography>
                <Rating
                  name='read-only'
                  value={parseInt(conciliation)}
                  onChange={conciliationChange}
                />
                <Typography component='legend'>Oportunidades</Typography>
                <Rating
                  name='read-only'
                  value={parseInt(oportunities)}
                  onChange={oportunitiesChange}
                />
                <Typography component='legend'>Salario</Typography>
                <Rating
                  name='read-only'
                  value={parseInt(salary)}
                  onChange={salaryChange}
                />
              </div>
              <div id='review-text'>
                <TextField
                  autoComplete='off'
                  required
                  id='standard-required'
                  label='Required'
                  defaultValue={title}
                  variant='standard'
                  onChange={titleChange}
                />
                <TextareaAutosize
                  autoComplete='off'
                  aria-label='minimum height'
                  minRows={10}
                  placeholder={description}
                  style={{ width: '100%' }}
                  onChange={descriptionChange}
                />
              </div>
              <Stack className='filter' width={200} spacing={2}>
                <Button
                  id='register-login'
                  variant='outlined'
                  color='primary'
                  endIcon={<SendIcon />}
                  onClick={newReview}
                >
                  Enviar
                </Button>
              </Stack>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

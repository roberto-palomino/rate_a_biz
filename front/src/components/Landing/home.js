import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../../assets/images/home1.jpg';
import img2 from '../../assets/images/home2.jpg';
import img3 from '../../assets/images/home3.jpg';
import img4 from '../../assets/images/home4.jpg';
import img5 from '../../assets/images/home5.jpg';
import img6 from '../../assets/images/home6.jpg';
import img7 from '../../assets/images/home7.jpg';
import img8 from '../../assets/images/home8.jpg';
import logo from '../../assets/images/Logo_RatebizNegro.png';
import star from '../../assets/images/estrella.png';
import './home.css';
import { Button, Stack } from '@mui/material';

export default function Home() {
  const [visible, setVisible] = React.useState('');

  const show = (e) => {
    if (!visible) {
      setVisible('show');
    } else {
      setVisible('');
    }
  };
  return (
    <div className='about'>
      <div id='one'>
        <img id='left1' src={logo} alt='logo' />
        <p>
          <span id='name'>
            rate a biz
            <img id='star' src={star} alt='estrella' />
          </span>
          nace con el propósito de ayudar a sus usuarios a encontrar el mejor
          lugar para desempeñar su trabajo.
        </p>
      </div>
      <div id='two'>
        <img id='right1' src={img1} alt='personas hablando' />
        Pasamos demasiado tiempo de nuestra vida en el trabajo para dedicarlo a
        un empleo en el que no estamos a gusto, nuestras perspectivas de crecer
        sean nulas o sea imposible conciliar vida laboral y familiar.
        <p>
          En Rate A Biz queremos ayudarte gracias a las experiencias de otros
          usuarios y sus valoraciones de las empresas en las que han trabajado.
        </p>
        <p>
          Estés buscando trabajo por primera vez o un cambio en tu vida laboral
          estamos aquí para ayudarte. Si acabas de mudarte a una nueva ciudad,
          utiliza nuestro filtrado por provincia para conocer las opiniones
          sobre las empresas que te rodean. Si consideras que tu salario no está
          a la altura de la competencia, revisa lo que pagan a otros usuarios en
          puestos similares al tuyo.
        </p>
        <p>
          Pero ojo, no todo es recibir un buen salario. En Rate A Biz podrás ver
          el nivel de conciliación de la vida laboral y familiar o las
          perspectivas de poder conseguir un ascenso y crecer dentro de una
          empresa.{' '}
        </p>
      </div>
      <Stack id='how-works' direction='row' spacing={2}>
        <Button variant='contained' onClick={show}>
          ¿Como funciona?
        </Button>
      </Stack>
      {visible ? (
        <>
          <p id='three'>
            <img id='left2' src={img3} alt='grupo de gente' />
            Busca empresas por su nombre, filtra por provincia, tipo de puesto,
            el sector o el rango salarial y ordena los resultados en base al
            ambiente laboral, el nivel de conciliación, las oportunidades o el
            salario. Podrás ver todas las valoraciones de una empresa o solo
            aquellas de tu provincia o tipo de trabajo. Tal vez la sede de
            Madrid tenga mal ambiente, pero la filial de Barcelona es un sueño
            hecho realidad o puede que los camareros de aquel restaurante no
            estén bien pagados pero los cocineros están encantados, bien pagados
            y con libertad para crear los platos que quieren. Es por esto que
            queremos mostrarte los resultados que mejor se adaptan a ti y a lo
            que estas buscando.
          </p>
          <div>
            <img id='right2' src={img4} alt='mesa de trabajo' />
            Si eres una empresa que quiere darse a conocer a futuros empleados,
            date de alta mediante un sencillo registro que después podrás
            completar. Solo necesitamos un correo y una contraseña. Ya
            completaras tu perfil mediante foto, sede, el enlace a tus redes o
            página web y el sector en el que realizas tu actividad principal más
            adelante.
            <p>
              ¿Has cambiado tu web o tu imagen corporativa? No te preocupes,
              podrás cambiar tus datos o tu foto cuando quieras desde el perfil
              de tu empresa.{' '}
            </p>
            <p>
              Atrae al nuevo talento dándote a conocer a nuestros usuarios.
              Únete a nosotros y deja que te encuentren.{' '}
            </p>
          </div>
          <div>
            <img id='left3' src={img8} alt='persona trabajando' />
            Si eres un trabajador que quieres compartir tu experiencia, no
            tienes más que registrarte y añadir una valoración. Un email y una
            contraseña y estarás listo para darnos tu opinión, porque ¡tu
            opinión nos importa y mucho!! Vuestras opiniones son nuestra razón
            de ser y la mejor forma de ayudar a otros usuarios como tú.
            <p>
              Busca la empresa en la que trabajas o aquella en la que trabajaste
              un tiempo atrás y ¡ponle nota! Solo te pediremos algunos datos que
              serán muy útiles para otros trabajadores como tú.
            </p>
            <p>
              Selecciona la provincia, el puesto en el que estabas empleado, el
              rango salarial y el año en el que empezaste y terminaste de
              trabajar ahí, si es que no sigues en ella. Un título y un breve
              comentario en el que compartas tu experiencia allí, por que hay
              cosas que contar más allá de un número. Y ¡Listo! Pasarás a formar
              parte de nuestra comunidad y estarás ayudando a cientos de
              usuarios que estén buscando una nueva aventura laboral.
            </p>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

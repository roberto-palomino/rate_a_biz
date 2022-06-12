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
import './quiltedImageList.css';

export default function QuiltedImageList() {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const itemData = [
    {
      img: `${img1}`,
      title: 'home1',
      rows: 2,
      cols: 2,
    },
    {
      img: `${img2}`,
      title: 'home2',
    },
    {
      img: `${img3}`,
      title: 'home3',
    },
    {
      img: `${img4}`,
      title: 'home4',
      cols: 2,
    },
    {
      img: `${img5}`,
      title: 'home5',
      cols: 2,
    },
    {
      img: `${img6}`,
      title: 'home6',
      rows: 2,
      cols: 2,
    },
    {
      img: `${img7}`,
      title: 'home7',
    },
    {
      img: `${img8}`,
      title: 'home8',
    },
  ];

  return (
    <>
      <hr></hr>
      <div className='about'>
        <p>
          Rate A Biz nace con el propósito de ayudar a sus usuarios a encontrar
          el mejor lugar para desempeñar su trabajo.
        </p>
        <p>
          Pasamos demasiado tiempo de nuestra vida en el trabajo para dedicarlo
          a un empleo en el que no estamos a gusto, nuestras perspectivas de
          crecer sean nulas o sea imposible conciliar vida laboral y familiar.
        </p>
        <p>
          En Rate A Biz queremos ayudarte gracias a las experiencias de otros
          usuarios y sus valoraciones de las empresas en las que han trabajado.
          Busca empresas por su nombre, filtra por provincia, tipo de puesto, el
          sector o el rango salarial y ordena los resultados en base al ambiente
          laboral, el nivel de conciliación, las oportunidades o el salario.
        </p>
        <p>
          Queremos mostrarte los resultados que mejor se adaptan a ti y a lo que
          estas buscando. Si eres una empresa que quiere darse a conocer a
          futuros empleados, date de alta mediante un sencillo registro que
          después podrás completar. Si eres un trabajador que quieres compartir
          tu experiencia, no tienes más que registrarte y añadir una valoración.
          Tu opinión nos importa y mucho!!
        </p>
      </div>
      <hr></hr>
      <ImageList
        sx={{ width: 900, height: 700 }}
        variant='quilted'
        cols={4}
        rowHeight={155}
        id='imageList'
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

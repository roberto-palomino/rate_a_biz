import React, { Suspense } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Loading from './Loading';
import ErrorBoundary from './ErrorBoundary';

function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider autoplay adaptiveHeight {...settings}>
      <div>
        <img
          className='carouselhome'
          src={`https://drive.google.com/file/d/1rzuZZvDxzGEoOHpqBdgGlR0oL6NRP97P/view?usp=sharing`}
          alt='foto empresas 1'
        ></img>
      </div>
      <div>
        <img
          className='carouselhome'
          src={`https://drive.google.com/file/d/16K0dgEWKUE6I8JsM87q5JAlLbvpMHi1j/view?usp=sharing`}
          alt='foto empresas 2'
        ></img>
      </div>
      <div>
        <img
          className='carouselhome'
          src={`https://drive.google.com/file/d/1WzRtrhVQ20WeflHEINY2-BU1rFWoZ5Bb/view?usp=sharing`}
          alt='foto empresas 3'
        ></img>
      </div>
      <div>
        <img
          className='carouselhome'
          src={`https://drive.google.com/file/d/1OxuKdEGLiHVAySmOOGum3irNEbDyExS5/view?usp=sharing`}
          alt='foto empresas 4'
        ></img>
      </div>
      <div>
        <img
          className='carouselhome'
          src={`https://drive.google.com/file/d/1F32OC8rZl2n3fvFr-Ccz79avvSBrSLBn/view?usp=sharing`}
          alt='foto empresas 5'
        ></img>
      </div>
    </Slider>
  );
}
const SliderHomeWrapper = () => (
  <Suspense fallback={<Loading className='page' />}>
    <ErrorBoundary fallback='SliderHome is failing'>
      <SliderHome />
    </ErrorBoundary>
  </Suspense>
);

export default SliderHomeWrapper;

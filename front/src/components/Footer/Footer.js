import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='politics-terms'>
        {/* <p>Política de privacidad</p>
        <p>Términos y condiciones</p>
        <p>Política de cookies</p> */}
        <a href='https://www.google.es'>
          Política de privacidad. Términos y condiciones{' '}
        </a>

        <a href='https://www.google.es'>Política de cookies</a>
      </div>
      <p className='copyright'>©️2022</p>
    </footer>
  );
};

export default Footer;

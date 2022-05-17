import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='politics-terms'>
        <NavLink to='/TermsAndConditions'>
          Política de privacidad | Términos y condiciones | Política de cookies
        </NavLink>
      </div>
      <p className='copyright'>©️2022 Rate A Biz</p>
    </footer>
  );
};

export default Footer;

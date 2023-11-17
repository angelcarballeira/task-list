import React from 'react';
import '../styles/Logo.css';
import freeCodeCampLogo from '../images/freecodecamp-logo.png';

function Logo() {
  return (
    <div className='freecodecamp-logo-container'>
      <img
        alt='Logo de freeCodeCamp'
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
      />
    </div>
  );
}

export { Logo };

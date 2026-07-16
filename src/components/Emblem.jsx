import React from 'react';
import logoImage from '../assets/logo.png';

const Emblem = ({ size = 60, className = "" }) => {
  return (
    <div 
      className={`position-relative overflow-hidden d-inline-flex align-items-center justify-content-center rounded-circle ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        flexShrink: 0
      }}
    >
      <img 
        src={logoImage} 
        alt="SMKMC Emblem" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.12)', // Slightly scale up to crop out the white corners outside the scalloped red ring
          display: 'block'
        }}
      />
    </div>
  );
};

export default Emblem;

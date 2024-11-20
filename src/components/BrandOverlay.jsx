import React from 'react';
import './BrandOverlay.css';

const BrandOverlay = () => {
  return (
    <div className="brand-info">

      <div className='overlay-container'>

        <div className="brand">
          <span className="icon"><img className='logo' src='/logo.png' alt='logo'/></span>
          <span className="brand-name">Spark</span>
        </div>

        <a href="#" className="learn-more">
          Learn more about Air Drive on <br /><span className='Spark-pl'>Spark.pl</span>
        </a>

      </div>

      <div className="footer-links">
        <a href="#">License</a>
        <a href="#">Terms of Use</a>
        <a href="#">Blog</a>
      </div>

    </div>
  );
};

export default BrandOverlay;

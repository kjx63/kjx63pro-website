import React from 'react';
import './HomeIntroduction.css';

const HomeIntroduction = () => {
  return (
    <div className='homeIntroduction'>
      <div className='homeIntroduction__container'>
        <div className='homeIntroduction__short'>
          <h1>Hi, I'm Kenji! Great to see you.</h1>
        </div>
        <div className='homeIntroduction__description'>
          <p>
            Since beginning my journey as a freelance designer nearly 10 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntroduction;

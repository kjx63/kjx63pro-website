import React from 'react';
import './Home.css';
import HomeIntroduction from './HomeIntroduction';
import HomeProject from './HomeProject';
import HomeSkills from './HomeSkills';

const Home = () => {
  return (
    <div className='home'>
      <HomeIntroduction />
      {/* <HomeRightSideBar /> */}
      <HomeSkills />
      <HomeProject />
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Button from '@material-ui/core/Button';
import SimpleMenu from './Menu';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'>KJX63PRO</h1>
      <div className='navbar__notLogo'>
        <ul className='navbar__links'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='blog'>
            <li>Blog</li>
          </Link>
          <Link to='/project'>
            <li>Project</li>
          </Link>
        </ul>
        <div className='navbar__rightButtons'>
          <Link to='/mentor' className='navbar__rightButton'>
            <Button className='navbar__mentorButton'>メンター依頼</Button>
          </Link>
          <Link to='/work' className='navbar__rightButton'>
            <Button className='navbar__mentorButton'>仕事依頼</Button>
          </Link>
        </div>
      </div>
      <div className='navbar__simpleMenu'>
        <SimpleMenu />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Hero.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BookIcon from '@material-ui/icons/Book';
import IconButton from '@material-ui/core/IconButton';

const Hero = () => {
  return (
    <div className='hero'>
      <h1>KJX63PRO </h1>
      <p className='hero__subtitle'>[30歳からの独学プログラマー👨‍💻] </p>
      <p className='hero__comment'>
        who dedicates to continue self-improvement
      </p>
      <div></div>
      <img className='hero__logo' src='profile.jpg' alt='' />
      <div className='hero__icon'>
        <IconButton>
          <a href='https://twitter.com/kjx63pro'>
            <TwitterIcon />
          </a>
        </IconButton>
        <IconButton>
          <a href='https://www.instagram.com/kjx63pro/'>
            <InstagramIcon />
          </a>
        </IconButton>
        <IconButton>
          <a href='/*'>
            <BookIcon />
          </a>
        </IconButton>
      </div>
      <img className='hero__image' src='hero.png' alt='' />
    </div>
  );
};

export default Hero;

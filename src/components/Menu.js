import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import './Menu.css';
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton>
        <MenuIcon
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          Open Menu
        </MenuIcon>
      </IconButton>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className='menuList'
      >
        <Link to='/'>
          <MenuItem className='menuList__home' onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link to='/blog'>
          <MenuItem className='menuList__blog' onClick={handleClose}>
            Blog
          </MenuItem>
        </Link>
        <Link to='/project'>
          <MenuItem className='menuList__project' onClick={handleClose}>
            Project
          </MenuItem>
        </Link>
        <Link to='/mentor'>
          <MenuItem className='menuList__mentor' onClick={handleClose}>
            メンター依頼
          </MenuItem>
        </Link>
        <Link to='/work'>
          <MenuItem className='menuList__work' onClick={handleClose}>
            仕事依頼
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

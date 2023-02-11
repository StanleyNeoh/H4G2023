import React, { useState } from 'react';
import Menu from '@mui/icons-material/Menu'
import MenuOpen from '@mui/icons-material/MenuOpen'
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/">
            <img src={Logo} alt='' />
          </Link>
        </div>
        <div className="navbar-links_container">
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/about'>About</Link></p>
          <p><Link to='/courses'>Courses</Link></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p><Link to='/login'>Sign in</Link></p>
        <button type="button"><Link to='/register'>Sign up</Link></button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <MenuOpen color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <Menu color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><Link to='/' onClick={() => setToggleMenu(false)}>Home</Link></p>
            <p><Link to='/about' onClick={() => setToggleMenu(false)}>About</Link></p>
            <p><Link to='/courses' onClick={() => setToggleMenu(false)}>Courses</Link></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

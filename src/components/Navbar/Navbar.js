import React from 'react';
import './Navbar.scss';

import { images } from '../../constants';

const navItems = ['home', 'about', 'contact', 'projects', 'skills', 'contact'];

function Navbar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo-wrapper'>
        <img src={images.myLogo} alt='logo with my name' />
      </div>
      <ul className='app__navbar-ul'>
        {navItems.map((item) => {
          return (
            <li className='p-text' key={`link-${item}`}>
              {/* <div /> */}
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';

const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);

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
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggleHamburger(true)} />

        {toggleHamburger && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [300, 0], opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggleHamburger(false)} />
            <ul>
              {navItems.map((item) => {
                return (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setToggleHamburger(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

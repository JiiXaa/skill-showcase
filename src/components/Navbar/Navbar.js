import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants';
import { navItems } from '../../constants/items';

// const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [navSize, setNavSize] = useState('10rem');
  const [navColor, setNavColor] = useState('transparent');

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavColor('var(--dark-grey)')
      : setNavColor('transparent');
    window.scrollY > 10 ? setNavSize('6rem') : setNavSize('10rem');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <nav
      className='app__navbar'
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: 'all 1s',
      }}
    >
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
        <HiMenuAlt4
          className='cursor-pointer'
          onClick={() => setToggleHamburger(true)}
        />

        <AnimatePresence>
          {toggleHamburger && (
            <motion.div
              key='hamburger'
              initial={{ x: 650 }}
              animate={{ x: 0 }}
              exit={{ x: 650 }}
              transition={{ ease: 'easeOut', duration: 1.1 }}

              // initial={{ opacity: 0 }}
              // whileInView={{ x: [300, 0], opacity: 1 }}
              // transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <HiX
                className='cursor-pointer'
                onClick={() => setToggleHamburger(false)}
              />
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
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;

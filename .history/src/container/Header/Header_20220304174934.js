import React from 'react';
import { motion } from 'framer-motion';

import { AppWrapper } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Header() {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hello, I am</p>
              <h1 className='head-text'>Tomasz</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p> Full Stack</p>
            <p style={{ paddingTop: 2 }}>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profilePic} alt='profile background' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='background-circle'
          src={images.circle}
          alt='background circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.node, images.redux].map((circle, i) => (
          <div className='circle-cmp app__flex' key={`circle-${i}`}>
            <img src={circle} alt={circle} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrapper(Header, 'home');

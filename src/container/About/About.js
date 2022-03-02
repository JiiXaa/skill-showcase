import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';

const aboutInfoEl = [
  {
    title: 'Front-End',
    description:
      'It is priority, my favorite part of web development. React.js / NextJS are my favorite',
    imgUrl: images.about01,
  },
  {
    title: 'Back-End',
    description: 'Could not imagine web development without it. Node.js mostly',
    imgUrl: images.about01,
  },
  {
    title: 'Utilities',
    description:
      'SCSS / styled-components, Redux / Context, GitHub, NPM, Postman / Insomnia, Stripe, and more...',
    imgUrl: images.about01,
  },
  {
    title: 'Utilities',
    description:
      'SCSS / styled-components, Redux / Context, GitHub, NPM, Postman / Insomnia, Stripe, and more...',
    imgUrl: images.about01,
  },
];

function About() {
  return (
    <>
      <h2 className='head-text'>
        It's more than building
        <span> Something.</span>
        <br />
        It is whole
        <span> Universe</span>
      </h2>

      <div className='app__profiles'>
        {aboutInfoEl.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;

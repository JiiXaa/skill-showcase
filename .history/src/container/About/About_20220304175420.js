import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper } from '../../wrapper';

import './About.scss';
import { urlFor, client } from '../../client';

function About() {
  const [aboutElements, setAboutElements] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutElements"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setAboutElements(data);
    });
  }, []);

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
        {aboutElements.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + i}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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

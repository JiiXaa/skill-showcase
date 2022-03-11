import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://www.linkedin.com/in/tomasz-ostroga-9753301a3'
        target='_blank'
        rel='noreferrer'
      >
        <FaLinkedinIn />
      </a>

      <a href='https://github.com/JiiXaa' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a
        href='https://www.facebook.com/tomasz.ostroga'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebookF />
      </a>
    </div>
  );
};

export default SocialMedia;

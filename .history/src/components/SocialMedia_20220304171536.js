import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
}

export default SocialMedia;

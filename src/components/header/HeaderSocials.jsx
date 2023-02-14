import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/adityaparab04/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/adityaparab04" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/AdityaParab4" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
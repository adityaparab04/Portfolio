import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {SiAboutdotme} from 'react-icons/si';
import {BiBookContent} from 'react-icons/bi';
import {GrProjects} from 'react-icons/gr';
import {MdContactMail} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {

  const [active, setActive] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><FaHome/></a>
      <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href='#experience' onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBookContent/></a>
      <a href='#projects' onClick={() => setActive('#projects')} className={active === '#projects' ? 'active' : ''}><GrProjects/></a>
      <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav
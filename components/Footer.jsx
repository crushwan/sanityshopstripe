import React from 'react';
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
       <p className='icons'>
        <AiFillInstagram />
        <AiOutlineGithub />
      </p>
      <p className='copyright'>Designed By WAN. © 2022 | Full-Stack Developer & UI-UX Designer</p>
    </div>
  )
}

export default Footer
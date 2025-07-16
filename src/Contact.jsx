import React from 'react'

import { CiLinkedin } from 'react-icons/ci'
import { CgMail } from "react-icons/cg";
function Contact() {
  return (
    <div className='contact-container'>
      <p>Let's Build Something Amazing Together...</p>
      <hr />
      <div className='contact-card'>
        <CiLinkedin className='contact-icon' />
        <a className='contact-link' href="http://linkedin.com/in/sumaya-almafarjeh-580a4a25b"  target="_blank"><span> Sumaya ALmafarjeh</span></a>
      </div>
      <div className='contact-card'>
        <CgMail className='contact-icon' />
        <a className='contact-link' href="mailto:sumaya.almafarjeh@gmail.com"  target="_blank"><span>sumaya.almafarjeh@gmail.com</span></a>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className='main-sec main-footer'>
    <p className='main-footer-title'>Let's Build Something Amazing Together!</p>
    <a href="http://linkedin.com/in/sumaya-almafarjeh-580a4a25b" className='main-footer-link' target="_blank"><CiLinkedin className='main-footer-icon' /><span> Sumaya ALmafarjeh</span></a>
    <a href="https://github.com/SumayaAlmafarjeh" className='main-footer-link' target="_blank"><FaGithub className='main-footer-icon' /><span> github</span></a>
  </div>
  )
}

export default Footer
import React from 'react'
import aboutimg from './assets/About-img.png'
function About() {
  return (
    <>
    <div className='about-page-container'>
      <div className='about-page'>
        <div className='left-sec'>
          <p> About Sumaya !</p>
          <div className='img-container'><img src={aboutimg} alt="" className='about-img' /></div>
        </div>
        <hr  />
        <div className='right-sec'>
          <div className='right-sec-desc'>
              <p><b>About Me </b><br />
              I am a fourth year Business Information Technology student at the university of jordan with a passion for web development. Over the years, I have explored various frameworks and technologies to build dynamic, user-friendly websites.
              <br /><br />  I am constantly investing in continuous learning and always seek opportunities to enhance my skills, whether through academic studies, hands-on projects, or new challenges. Beyond coding, I believe in maintaining a balanced life, dedicating time to my hobbies, volunteering, and personal growth. My goal is to create meaningful digital solutions while continuously evolving as a developer and innovator.
              </p>
          </div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default About
import React from 'react'
import './header.css'

import boy from '../../assets/Boy_with_laptop.svg'
import ig from '../../assets/Icons/instagram.svg'
import linkedln from '../../assets/Icons/linkedln.svg'
import github from '../../assets/Icons/github.svg'

const Header = () => {
  return (
    <div className='portf__header'>
      <div className='portf__header-intro'>
        <div className='portf__header-intro_title'>
          <div className='portf__header-intro_title-line'></div>
          <p>Software Engineer</p>
        </div>
        <h1>Hello! I am Rotimi Abayomi</h1>
        <p>A <span>software engineer</span>  with over a year of experience, I possess exceptional analytical and problem-solving programming skills. My collaborative approach has enabled me to develop excellent communication and time-management skills. My goal is to design, analyze, and implement systems that enhance customer satisfaction and user experience, delivering more efficient and effective solutions. </p>
        <div className='portf__header-intro_socials'>
          <p>Check Out My</p>
          <div className='portf__header-intro_socials-linkedln'>
            <a href="https://www.linkedin.com/in/rotimi-abayomi/"><img src={linkedln} alt="instagram"/></a>
          </div>
          <div className='portf__header-intro_socials-instagram'>
            <a href="https://www.instagram.com/rotimi_draws/"><img src={ig} alt="instagram" /></a>
          </div>
          <div className='portf__header-intro_socials-github'>
            <a href="https://github.com/pro3088"><img src={github} alt="instagram" /></a>
          </div>
        </div>
      </div>
      <img src={boy} alt="boy with laptop" />
    </div>
  )
}

export default Header

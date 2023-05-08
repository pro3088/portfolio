import React from 'react'
import './header.css'

import boy from '../../assets/Boy_with_laptop.svg'
// import ig from '../../assets/Icons/instagram.svg'
import linkedln from '../../assets/Icons/linkedln.svg'
import github from '../../assets/Icons/github.svg'

const Header = () => {
  return (
    <div className='portf__header'>
      <div className='portf__header-intro'>
        <div className='portf__header-intro_title'>
          <div className='portf__header-intro_title-line'></div>
          <p>Java Developer / Full-Stack Engineer</p>
        </div>
        <h1>Hello! I am Rotimi Abayomi</h1>
        <div className='portf__header-intro_title-paragraph'>
          <p>Welcome to my portfolio site, where the art of code takes center stage! Here, I invite you to delve into my world of Java development and explore the wonders of artificial intelligence.</p><br />
          <p>With a passion for technology and an eye for design, I blend functionality and aesthetics to create captivating experiences. Through lines of code, I bring ideas to life, crafting innovative solutions that leave a lasting impact.</p><br />
          <p>So, join me on this concise and exhilarating journey into the realm of code. Let's weave magic together and bring our tech aspirations to life.</p>
        </div>
        
        <div className='portf__header-intro_socials'>
          <p>Check Out My</p>
          <div className='portf__header-intro_socials-linkedln'>
            <a href="https://www.linkedin.com/in/rotimi-abayomi/"><img src={linkedln} alt="instagram"/></a>
          </div>
          {/* <div className='portf__header-intro_socials-instagram'>
            <a href="https://www.instagram.com/rotimi_draws/"><img src={ig} alt="instagram" /></a>
          </div> */}
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

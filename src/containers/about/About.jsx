import React from 'react';
import './about.css';

import {Skill, Title} from '../../components/index';
import persona from '../../assets/persona.svg';

import {postgresql,postman,git,java,javaScript,css,html, python, adobexd} from './import';

const About = () => {
  return (
    <div className='portf__about' id='About'>
      <Title title='about' />
      <div className='portf__about-container'>
        <div className='portf__about-container_persona'>
          <img src={persona} alt="persona" />
          <div className='portf__about-container_persona-figures'>
            <div className='portf__about-container_persona-figures_stats'>
              <h4>01+</h4>
              <p>Years of Experience</p>
            </div>
            <div className='portf__about-container_persona-figures_stats'>
              <h4>5</h4>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
        <div className='portf__about-container_skills'>
          <div className='portf__about-container_skills-text'>
            <p>As a graduate of computer engineering, my coding journey began even before stepping foot into the university. The world of programming has always fascinated me, and I found joy in exploring its depths, constantly seeking new challenges.</p><br />
            <p>Amongst the various domains I've explored, I discovered a particular passion for Java and full-stack development. There's an indescribable satisfaction that comes from crafting elegant solutions and bringing ideas to life through well-structured code. The versatility and power of Java, coupled with the excitement of creating seamless user experiences, captured my heart and became the core of my expertise.</p><br />
            <p>But it's not just about the code for me. I have a deep appreciation for the art of UI/UX design, understanding the importance of marrying functionality with aesthetics. By blending my development skills with a keen eye for design, I strive to create immersive and delightful user interfaces.</p>
          </div>
          <div className='portf__about-container_skills-display'>
            <Skill img ={css} description = "CSS" />
            <Skill img ={html} description = "HTML" />
            <Skill img ={javaScript} description = "JAVASCRIPT" />
            <Skill img ={java} description = "JAVA" />
            <Skill img ={python} description = "PYTHON" />
            <Skill img ={git} description = "GIT" />
            <Skill img ={postgresql} description = "POSTGRESQL" />
            <Skill img ={postman} description = "POSTMAN" />
            <Skill img ={adobexd} description= "ADOBEXD" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

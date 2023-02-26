import React from 'react';
import './about.css';

import {Skill, Title} from '../../components/index';
import persona from '../../assets/persona.svg';

import {postgresql,postman,git,java,javaScript,css,html, python} from './import';

const About = () => {
  return (
    <div className='portf__about' id='About'>
      <Title title='about' />
      <div className='portf__about-container'>
        <div className='portf__about-container_persona'>
          <img src={persona} alt="persona" />
          <div className='portf__about-container_persona-figures'>
            <div className='portf__about-container_persona-figures_experience'>
              <h4>01+</h4>
              <p>Years of Experience</p>
            </div>
            <div className='portf__about-container_persona-figures_project'>
              <h4>5</h4>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
        <div className='portf__about-container_skills'>
          <div className='portf__about-container_skills-text'>
            <p>I am a software engineer and Graduate of Computer Engineering from Nile University of Nigeria.</p>
            <br />
            <p>Focused on supporting team efforts and maximizing quality for end users.</p>
            <br />
            <p>I am a Java Engineer by nature but have ventured into different technologies like AI, Embedded systems and machine learning.</p>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

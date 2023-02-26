import React from 'react'
import './skills.css'

const Skills = ({img, description}) => {
  return (
    <div className='portf__skills'>
      <img src={img} alt={description} />
      <div className='portf__skills-text'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Skills

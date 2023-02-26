import React from 'react'
import './exp.css'

const EXP = ({date, title, company, description}) => {
  return (
    <div className='portf__exp'>
      <div className='portf__exp-header'>
        <h6>{date}</h6>
        <h4>{title}</h4>
        <h6>{company}</h6>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default EXP

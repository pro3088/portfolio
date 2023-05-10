import React from 'react'
import './card.css'

const Card = ({title, stack, description, link}) => {
  return (
    <div className='portf__card' >
      <div className='portf__card-title'>
        <h3>{title}</h3>
        <h5>{stack}</h5>
        <p><a href={link}>LINK</a></p>
      </div>
      <div className='portf__card-description'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card

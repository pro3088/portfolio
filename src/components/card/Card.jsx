import React from 'react'
import './card.css'

const Card = ({title, type, img, progress}) => {
  return (
    <div className='portf__card' >
      <h5>{title}</h5>
      <div className='portf__card-progress'>
       <p>{type}</p>
       <p>{progress}</p>
      </div>
      <img src= {img} alt={type} />
    </div>
  )
}

export default Card

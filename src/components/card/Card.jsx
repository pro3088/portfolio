import React from 'react'
import './card.css'

const Card = ({title, stack, img, sitelink, readlink, siteplaceholder}) => {
  return (
    <div className='portf__card' >
      <h3>{title}</h3>
      <p>{stack}</p>
      <img src= {img} alt={stack} />
      <div className='portf__card-links'>
        <p><a href={sitelink}>{siteplaceholder}</a></p>
        <p><a href={readlink}>Read More</a></p>
      </div>
    </div>
  )
}

export default Card

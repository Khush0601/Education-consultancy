import React from 'react'
import './Card.css'

const Card1 = ({cardPic,cardAlt,cardHeading,cardDesc,button}) => {
  return (
    <div className='card'>
      <div className='circle'>
      <img className="image" src={cardPic} alt={cardAlt}  />
      </div>
     <div className='card-heading'>{cardHeading}</div>
     <div className='card-desc'>{cardDesc}</div>
     <div className='card-button'>{button}</div>

    </div>
  )
}

export default Card1
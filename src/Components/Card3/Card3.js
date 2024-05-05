import React from 'react'
import './Card3.css'
const Card3 = ({cardHeading,cardSecondHeading,cardDescription}) => {
  return (
    <div className='card3-container'>
     <div className='card-heading'>{cardHeading}</div>
     <div className='card-secondheading'>{cardSecondHeading}</div>
     <div className='card-paragraph'>{cardDescription}</div>
     <div className='program-details'>
     View Program Details
     </div>

    </div>
  )
}

export default Card3
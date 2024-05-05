import React from 'react'
import './Card2.css'

const Card2 = ({cardPicture,cardName,cardTitle,cardDescription,cardData}) => {
  return (
    <div className='card-two'>
        <div className='circle2'>
            <img src={cardPicture} alt={cardName} width={60} height={60}/>
        </div>
       <div className='card-heading-part'> 
        <div className='ranking'>{cardTitle}</div>
        <div className='desc'>{cardDescription}</div></div>
        <div className='cardData-container'>{cardData}</div>
    </div>
  )
}

export default Card2
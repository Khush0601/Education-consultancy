import React from 'react'
import './Card4.css'
const Card4 = ({title,secondTitle,desc}) => {
  return (
    <div className='card4-container'>
        <div className='ins-title'>{title}</div>
        <div className='ins-second-title'>{secondTitle}</div>
        <div className='ins-desc'>{desc}</div>
    </div>
  )
}

export default Card4
import React from 'react'
import'./Card6.css'
const Card6 = ({symbol,number,symbolName}) => {
  return (
    <div className='info-card'>
     <div className='info-image-container'>
        <img src={symbol} alt={symbolName} />
     </div>
     <div className='info-desc'>
        <div className='number'>{number}</div>
        <div className='symbol-name'>{symbolName}</div>
     </div>
    </div>
  )
}

export default Card6
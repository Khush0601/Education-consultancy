import React from 'react'
import './Card5.css'
const Card5 = ({image,imageName}) => {
  return (
    <div className='product-card-container'>
        <div className='product-image-container'>
            <img src={image} alt={imageName} />
        </div>
        <div className='name'>{imageName}</div>
    </div>
  )
}

export default Card5
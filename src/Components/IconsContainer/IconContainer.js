import React from 'react'
import './IconContainer.css'
const IconContainer = ({icon,iconName}) => {
  return (
    <div className='icon-container'>
        <img src={icon} alt={iconName}/>
    </div>
  )
}

export default IconContainer
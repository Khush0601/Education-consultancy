import React from 'react'
import './Header.css'
import menu from '../../Assets/menu_5259008 1.svg'
const Header = () => {
  return (
    <div className='header-container'>
        <div className='title'>PRAGYA EDUCATION CONSULTANCY</div>
        <div className='menu'>
            <img src={menu} alt='Menu' width={40} height={40}/>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import './Footer.css'
import IconContainer from '../IconsContainer/IconContainer'
import Instagram from '../../Assets/Instagram.svg'
import YouTube from '../../Assets/YouTube.svg'
import Facebook from '../../Assets/Facebook.svg'
import Twitter from '../../Assets/Twitter.svg'
import LinkedIn from '../../Assets/LinkedIn.svg'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-title'>PRAGYA EDUCATION CONSULTANCY</div>
        <div className='icons'>
            <IconContainer icon={Instagram} iconName="Instagram"/>
            <IconContainer icon={YouTube} iconName="YouTube"/>
            <IconContainer icon={Facebook} iconName="Facebook"/>
           <IconContainer icon={Twitter} iconName="Twitter"/>
            <IconContainer icon={LinkedIn} iconName="linkedIn"/>
        </div>
    </div>
  )
}

export default Footer
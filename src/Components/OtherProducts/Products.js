import React from 'react'
import './Products.css'
import Card5 from '../Card5/Card5'
import scales from '../../Assets/Scales.svg'
import university from '../../Assets/University Campus.svg'
import health from '../../Assets/Health Checkup.svg'
import collegeApplication from '../../Assets/Command Line.svg'
const Products = () => {
  return (
    <div className='product-container'>
        <div className='product-heading'>
        Other Products
        </div>
        <div className='product-boxes'>
            <Card5 image={scales} imageName="College Compare"/>
            <Card5 image={university} imageName="College Reviews" />
            <Card5 image={health} imageName="NEET Companion"/>
            <Card5 image={collegeApplication} imageName="College Application"/>
         </div>
    </div>
  )
}

export default Products
import React from 'react'
import './Student.css'
import Card3 from '../Card3/Card3'
const Student = () => {
  return (
    <div className='student-container'>
      <div className='student-title'>CAREER COUNSELLING PROGRAMS</div>
     <div className='card-box'>
     <Card3 cardHeading="Class 8-9"
     cardSecondHeading="Stream & Subject Selection"
     cardDescription="Advanced assessment & personalised guidance to help you select the perfect
      stream and subjects that align you to the right careers."/>
     <Card3 cardHeading="Class 10-12"
     cardSecondHeading="Career Selection & Planning"
     cardDescription="Expert guidance & 5-dimensional assessment to help you discover your
      perfect career and choose the right course and college."/>
     <Card3 cardHeading="College and Graduates"
     cardSecondHeading="Career Selection & Development"
     cardDescription="5-dimensional assessment & superior guidance to help you discover
      your perfect career and choose the best next step."/>
     <Card3 cardHeading="COLLEGE APPLICATION PROGRAMS"
     cardSecondHeading="Overseas Application"
     cardDescription="Advanced assessment & personalised guidance to help you select the perfect stream and subjects that align you to the right careers."/>
     </div>
    {/* <div className='cards-images'>
    Other Products
    </div> */}
    </div>
  )
}

export default Student
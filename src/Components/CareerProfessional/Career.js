import React from 'react'
import './Career.css'
import Card4 from '../Card4/Card4'
const CareerTab = () => {
  return (
    <div className='career-container'>
      <Card4 title="International Certified"
      secondTitle="Career Coach(ICCC)"
      desc="Enhance or build skills in career counselling certification program designed and delivered by industry experts.
           With an emphasis on global best practices and experiential learning,ICCC
            is the perfect stepping stone for educationlists and counsellors."
      />
      <Card4 title="Mindler Partner"
      secondTitle="Program"
      desc="BE a Mindler Partner Counsellor to expand,enhance and grow your career counselling practice.Leverage a world-class 
      assessment platform,advanced analytics and sophisticated counsellor support tools to deliver
       quality career guidance and grow as a career counsellor."/>
    </div> 
  )
}

export default CareerTab
import React from 'react'
import './Instution.css'
import Card4 from '../Card4/Card4'
const InstitutionTab = () => {
  return (
    <div className='institution-container'>
       <Card4 title="In-School" 
        secondTitle="Career Guidance Program"
         desc="State-of-the-art career guidance platform with advance assessments, expert counselling,in-school workshops,
         sophisticated analytics,alumni tracking and more,to set up an end-to-end career
         guidance ecosystem in schools and cater to the needs of multiple stakeholders."/>
         <Card4 title="MUN Training"
          secondTitle="Program"
          desc="Program students for success at the Model United Nations through expert-led training and comprehensive guidance.
          Covering everything from delegation and resolution drafting to public speaking and chairing,
          the training program helps stdents excel at MUN conferences."/>
          <Card4 title="Mindler"
          secondTitle="Talks"
          desc="Drive Career awareness and inspire students through interactive workshops with 
          successful professionals.The best minds from eclectic fields like Economics,Science,
          Music,cryptocurrency and more come together to share their experiences,knowledge and insights."/>
    </div>
  )
}

export default InstitutionTab
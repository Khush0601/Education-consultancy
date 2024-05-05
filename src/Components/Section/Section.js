import React from 'react'
import './Section.css'
import SectionFirst from '../SectionFirst/SectionFirst'
import CounselingSection from '../CounselingSection/CounselingSection'
import DataSection from '../DataSection/DataSection'
import PredictionSection from '../PredictionSection/PredictionSection'
import OnlineCourses from '../OnlineCourses/OnlineCourses'
import TabNavigation from '../TabNavigation/TabNavigation'


const Section = () => {
  return (
    <div className='section-container'>
        <SectionFirst/>
        <CounselingSection/>
       <DataSection/>
       <PredictionSection/>
       <OnlineCourses/>
       <TabNavigation/>
    </div>
  )
}

export default Section
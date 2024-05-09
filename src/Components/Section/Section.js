import React from 'react'
import './Section.css'
import SectionFirst from '../SectionFirst/SectionFirst'
import CounselingSection from '../CounselingSection/CounselingSection'
import DataSection from '../DataSection/DataSection'
import PredictionSection from '../PredictionSection/PredictionSection'
import OnlineCourses from '../OnlineCourses/OnlineCourses'
import TabNavigation from '../TabNavigation/TabNavigation'
import Products from '../OtherProducts/Products'
import Information from '../Information/Information'
import OwnerDetails from '../OwnerDetails/OwnerDetails'
import Footer from '../Footer/Footer'


const Section = () => {
  return (
    <div className='section-container'>
        <SectionFirst/>
        <CounselingSection/>
       <DataSection/>
       <PredictionSection/>
       <OnlineCourses/>
       <TabNavigation/>
       <Products/>
       <Information/>
       <OwnerDetails/>
       <Footer/>
    </div>
  )
}

export default Section
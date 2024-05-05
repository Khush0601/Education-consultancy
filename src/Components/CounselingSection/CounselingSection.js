import React from 'react'
import './CounselingSection.css'
import Card1 from '../Card1/Card1'
import image1 from '../../Assets/7155157 1 (1).svg'
import customer from '../../Assets/costumer_6012670 1.svg'
import customer2 from '../../Assets/costumer_6012670 2.svg'
import { useMediaQuery } from 'react-responsive'
const CounselingSection = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  return (
    <div className='counseling-container'>
        <div  className='counseling'>Counselling</div>
        <div className='para'>We ease your biggest doubts with personalized Video Counselling from our
             Curated Experts and Answers from the student community</div>
          <div className='counceling-Card'>
         <div className='counceling-Card-left'>
         <Card1 cardPic={customer} cardAlt='customers'
          cardHeading='Counselling'
          cardDesc='Personalized Video Counselling from Curated Experts on Exams, Courses, Colleges and Career selection on our App'
          button='START NOW'/>
          <Card1 cardPic={customer2} 
          cardAlt='customer2' 
          cardHeading="QnA" 
          cardDesc="1 Million+ Questions answered by the student community within 24 hours each"
          button='ASK NOW'
          />
         </div>
         {
          !isMobile &&  <div className='counceling-Card-right'>
          <img src={image1} alt='image1' />
         </div>
         }
        
          </div>
    </div>
  )
}

export default CounselingSection
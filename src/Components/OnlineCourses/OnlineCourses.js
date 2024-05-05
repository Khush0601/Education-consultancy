import React from 'react'
import './OnlineCourses.css'
import Card2 from '../Card2/Card2'
import image4 from '../../Assets/Online courses.svg'
import customer7 from '../../Assets/costumer_6012670 7.svg'
import customer8 from '../../Assets/costumer_6012670 8.svg'
import { useMediaQuery } from 'react-responsive'
const OnlineCourses = () => {
    let onlineData=['Top Universities in India','Top Colleges in India','Top Engineering Colleges In India','Top Law Colleges in India']
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  return (
    <div className='online'>
        <div className='online-title'>Online Courses and Certifications</div>
        <div className='online-para'>Upskill and reskill to empower your career journey with Online Courses and Certifications</div>
        <div className='online-box'>
         {
            !isMobile && <div className='online-left'>
            <img src={image4} alt="image4" />
         </div>
         }
         <div className='online-right'>
            <Card2 
             cardPicture={customer7}
             cardName="customer7"
             cardTitle="Trending Specializations"
             cardDescription="Know your College Admission chances at the course-level based on domicile, caste, gender etc"
             cardData={onlineData.map((el,i)=>{
                return <div className='online-data-style'>{el}</div>
             })}
             />
            <Card2  
             cardPicture={customer8}
             cardName="customer8"
             cardTitle="Trending Courses"
             cardDescription="Know your College Admission chances at the course-level based on domicile, caste, gender etc"
             cardData={onlineData.map((el,i)=>{
                return <div className='online-data-style'>{el}</div>
             })}
            />
         </div>
        </div>
    </div>
  )
}

export default OnlineCourses
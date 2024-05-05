import React from 'react'
import './DataSection.css'
import image2 from '../../Assets/3169210 1.svg'
import Card2 from '../Card2/Card2'
import customer3 from '../../Assets/costumer_6012670 3.svg'
import customer4 from '../../Assets/costumer_6012670 4.svg'
import { useMediaQuery } from 'react-responsive'
const DataSection = () => {
    let cardDatas=['Top Universities in India','Top Colleges in India','Top Engineering Colleges In India','Top Law Colleges in India']
    let cardDatas2=['JEE Main','GATE','CAT','MET','CLAT','NEET','BITSAT','CUET','VITEEE','VITEEE','VITEEE']
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  return (
    <div className='data-section'>
       <div className='data-heading'>Data</div>
       <div className='data-desc'>We simplify information for you on over 30,000 Colleges, 500 Exams and500 Courses across domains and regions all over India</div>
       <div className='data-box'>
       {
         !isMobile &&  <div className='data-pic'>
         <img src={image2} alt='image2' width={600} height={600}/>
     </div>
       }
        <div className='data-cards'>
         <Card2 
         cardPicture={customer3}
         cardName='customer3'
         cardTitle="Rankings"
         cardDescription="1500 Colleges Ranked based on transparent, accurate, government-approved, student-friendly data"
         cardData={cardDatas.map((el,i)=>{
            return <div key={i} className='cardArrayDatas'>{el}</div>
         })}
         />
         <Card2 
         cardPicture={customer4} 
         cardName="customer4"
         cardTitle="Exams"
         cardDescription="Easy Information and downloads on Exam preparation, dates, counselling, syllabus and more"
         cardData={cardDatas2.map((element,ind)=>{
            return <div key={ind} className='cardArray-second'>{element}</div>
         })}
         />
        </div>

       </div>
    </div>
  )
}

export default DataSection
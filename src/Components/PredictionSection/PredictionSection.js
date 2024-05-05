import React from 'react'
import './PredictionSection.css'
import Card2 from '../Card2/Card2'
import customer5 from '../../Assets/costumer_6012670 5.svg'
import customer6 from '../../Assets/costumer_6012670 6.svg'
import image3 from '../../Assets/3169210 2.svg'
import { useMediaQuery } from 'react-responsive'
const PredictionSection = () => {
    let data1=['Top Universities in India','Top Colleges in India','Top Engineering Colleges In India','Top Law Colleges in India']
    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  return (
    <div className='PredictionSection-container'>
       <div className='pre-heading'>Prediction</div>
       <div className='pre-desc'>We predict your College admission chances and Ranks based on years of historical data and advanced Analytics to help you plan in advance</div>
       <div className='pre-box'>
        <div className='pre-box-left'>
            <Card2 
             cardPicture={customer5}
             cardName="customer5"
             cardTitle="College Predictors"
             cardDescription="Know your College Admission chances at the course-level based on domicile, caste, gender etc"
             cardData={data1.map((el,i)=>{
                return <div key={i} className='cardData1Style'>{el}</div>
             })}
            />
            <Card2 
            cardPicture={customer6}
            cardName="customer6"
            cardTitle="Rank Predictors"
            cardDescription="Know your College Admission chances at the course-level based on domicile, caste, gender etc"
            cardData={data1.map((el,i)=>{
               return <div key={i} className='cardData1Style'>{el}</div>
            })}
            />
        </div>
        {
         !isMobile && <div className='pre-box-right'>
         <img src={image3} alt='image3' />
     </div>
        }
       </div>
    </div>
  )
}

export default PredictionSection
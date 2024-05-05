import React, { useState } from 'react'
import './TabNavigation.css'
import student from '../../Assets/student.svg'
import Institution from '../../Assets/institution.svg'
import Career from '../../Assets/careerPersonnel.svg'
import Student from '../Student/Student'
import InstitutionTab from '../Instution/Instution'
import CareerTab from '../CareerProfessional/Career'


const TabNavigation = () => {
    const [activeButton,setActiveButton]=useState('For Student')
    let buttonList=[
        {
            name:'For Student',
            image:student,
        },
        {
            name:'For Institution',
            image:Institution,
        },
        {
            name:'For Career Professional',
            image:Career,
        },

    ]
    const onTabClick=(name)=>{
     setActiveButton(name)
    }
  return (
    <div className='tab-container'>

        <div className='tab-title'>Our Program </div>
        <div className='tab-desc'>Personalized, expert services & support for all stakeholders in the career guidance process.</div>
        <div className='button-container'>
            {buttonList.map((el,i)=>{
                return <div className='tab' key={i} onClick={()=>onTabClick(el.name)}>
                    <div className={`tab-image-container ${el.name===activeButton && " tab-active-container"}`}>
                    <div className={`tab-image ${el.name===activeButton && 'tab-active-image'}`}>
                        <img src={el.image} alt={el.name}/>
                    </div>
                    </div>
                    <div  className={`tab-name ${el.name===activeButton && 'tab-active-name'}`}>{el.name}</div>
                </div>
                
               
                
            })}
        </div>
        <div className='content-container'>
            {activeButton==='For Student' && <Student/>}
            {activeButton==='For Institution' && <InstitutionTab/>}
            {activeButton==='For Career Professional' && <CareerTab/>}
        </div>
       
    </div>
  )
}

export default TabNavigation
import React from 'react'
import './Information.css'
import Card6 from '../Card6/Card6'
import studentSymbol from '../../Assets/Group 153 (1).svg'
import collegesymbol from '../../Assets/Group 154.svg'
import examSymbol from '../../Assets/Group 155.svg'
import ebookSymbol from '../../Assets/Group 156.svg'

const Information = () => {
  return (
    <div className='info-conatiner'>
        <Card6 symbol={studentSymbol} number="120M+" symbolName="Student"/>
        <Card6 symbol={collegesymbol} number="24,000" symbolName="Colleges"/>
        <Card6 symbol={examSymbol} number="250+" symbolName="Exam"/>
        <Card6 symbol={ebookSymbol} number="1250+" symbolName="E-book"/>
    </div>
  )
}

export default Information
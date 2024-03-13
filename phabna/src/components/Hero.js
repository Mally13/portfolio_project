import React from 'react'
import FlightSearch from './FlightSearch'
import ReveiwBox from './ReveiwBox'
import '../assets/styles/hero.css'

function Hero() {
  return (
    <div className='hero-wrapper'>
        <FlightSearch/>
        <ReveiwBox/>
    </div>
  )
}

export default Hero
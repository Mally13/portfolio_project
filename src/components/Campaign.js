import React from 'react'
import "../assets/styles/campaign.css"
import calender from "../assets/images/calender.jpg"
import support from "../assets/images/support.jpg"
import money from "../assets/images/money.jpg"

function Campaign() {
  return (
    <div className='container campaign'>
      <div className='campaign-box'>
        <img className='campaign-img' src={support} alt='support'/>
        <div className='campain-text'>
          <h4>Mon-Sun 09:00-22:00</h4>
          <p>Get travel experts provide quality service whenever you need it.</p>
        </div>
        <div className='campain-text'>
          <img className='campaign-img' src={money} alt='support'/>
          <h4>Price Match Promise</h4>
          <p>We offer the best rates for your flights accross the world.</p>
        </div>
        <div className='campain-text'>
          <img className='campaign-img' src={calender} alt='calender'/>
          <h4>Same Day Cancellation</h4>
          <p>No hastle, no extra costs, Cancellations made easy.</p>
        </div> 
      </div>
    </div>
  )
}

export default Campaign
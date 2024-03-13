import React from 'react'
import '../assets/styles/header.css'


function Header() {
  return (
    <div className='header'>
        <div className='logo'>
        </div>
        <div className='navbar'>
          <div className='nav-item'>
                <h4><span className='icon-support'></span>Customer Support</h4>
          </div>
          <div className='nav-item my-account'>
            <div className='icon-bars'></div>
            <div className='icon-user'></div>
          </div>
        </div>
    </div>
  )
}

export default Header
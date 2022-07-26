import React from 'react'
import './Header.css'
import {FcBusinessman } from 'react-icons/fc';


function Header() {
  return (
    <div className='header'>
      <div className="left">
        <h1>Welcome back, <span className="highlight">John</span></h1>
        <p>Here is what's happening with your store today</p>
      </div>
      <div className="right">
            <div className="account">
              <FcBusinessman className='avatar'/>

                <p className="name highlight">Ndigirigi John</p>

            </div>
      </div>
    </div>
  )
}

export default Header